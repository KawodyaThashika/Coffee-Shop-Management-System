/* Sip & Savor Admin Dashboard */
(() => {
    const AUTH_KEY = 'ss_admin_authenticated';
    const USERNAME = 'admin';
    const PASSWORD = 'admin123';

    const $ = id => document.getElementById(id);
    const loginScreen = $('login-screen');
    const dashboard = $('dashboard');
    const loginForm = $('login-form');
    const username = $('admin-username');
    const password = $('admin-password');
    const loginError = $('login-error');
    const pwdToggle = $('pwd-toggle');
    const logoutBtn = $('logout-btn');
    const refreshBtn = $('refresh-btn');
    const clearAllBtn = $('clear-all-btn');
    const tbody = $('orders-tbody');
    const empty = $('orders-empty');
    const search = $('orders-search');
    const statusFilters = $('status-filters');
    const pendingBadge = $('pending-badge');
    const kpiRow = $('kpi-row');
    const analyticsGrid = $('analytics-grid');
    const toast = $('admin-toast');
    const modal = $('order-modal');
    const modalClose = $('om-close');
    const modalId = $('om-id');
    const modalTime = $('om-time');
    const modalBody = $('om-body');
    const sidebar = $('sidebar');
    const overlay = $('admin-overlay');
    const menuToggle = $('menu-toggle');
    const sidebarClose = $('sidebar-close');

    let activeStatus = 'all';
    let currentSearch = '';
    let toastTimer;

    function isAuthenticated() {
        return sessionStorage.getItem(AUTH_KEY) === 'true';
    }

    function showLogin() {
        loginScreen.hidden = false;
        dashboard.hidden = true;
        setTimeout(() => username.focus(), 50);
    }

    function showDashboard() {
        loginScreen.hidden = true;
        dashboard.hidden = false;
        renderAll();
    }

    function showToast(message) {
        clearTimeout(toastTimer);
        toast.textContent = message;
        toast.classList.add('show');
        toastTimer = setTimeout(() => toast.classList.remove('show'), 2600);
    }

    function formatMoney(value) {
        return '$' + Number(value || 0).toFixed(2);
    }

    function formatDate(iso) {
        const d = new Date(iso);
        return d.toLocaleString([], {
            year: 'numeric', month: 'short', day: '2-digit',
            hour: '2-digit', minute: '2-digit'
        });
    }

    function getFilteredOrders() {
        let orders = OrderStore.getAll();
        if (activeStatus !== 'all') {
            orders = orders.filter(o => o.status === activeStatus);
        }
        const q = currentSearch.trim().toLowerCase();
        if (q) {
            orders = orders.filter(o =>
                String(o.id).toLowerCase().includes(q) ||
                String(o.customerName || '').toLowerCase().includes(q)
            );
        }
        return orders;
    }

    function renderKPIs() {
        const orders = OrderStore.getAll();
        const pending = orders.filter(o => o.status === 'Pending').length;
        const active = orders.filter(o => ['Pending','Preparing','Ready'].includes(o.status)).length;
        const completed = orders.filter(o => o.status === 'Completed').length;
        const revenue = orders
            .filter(o => o.status !== 'Cancelled')
            .reduce((sum, o) => sum + Number(o.total || 0), 0);

        pendingBadge.textContent = pending;

        kpiRow.innerHTML = `
            <div class="kpi-card"><span class="kpi-icon">📦</span><div><span class="kpi-label">Total Orders</span><strong>${orders.length}</strong></div></div>
            <div class="kpi-card"><span class="kpi-icon">⏳</span><div><span class="kpi-label">Pending</span><strong>${pending}</strong></div></div>
            <div class="kpi-card"><span class="kpi-icon">🔥</span><div><span class="kpi-label">Active Orders</span><strong>${active}</strong></div></div>
            <div class="kpi-card"><span class="kpi-icon">✓</span><div><span class="kpi-label">Completed</span><strong>${completed}</strong></div></div>
            <div class="kpi-card"><span class="kpi-icon">💰</span><div><span class="kpi-label">Revenue</span><strong>${formatMoney(revenue)}</strong></div></div>
        `;
    }

    function statusClass(status) {
        return 'status-' + String(status).toLowerCase();
    }

    function renderOrders() {
        const orders = getFilteredOrders();
        empty.hidden = orders.length !== 0;
        tbody.innerHTML = orders.map(o => {
            const itemCount = (o.items || []).reduce((sum, item) => sum + Number(item.qty || 0), 0);
            return `
                <tr>
                    <td><button class="order-id-link" data-open="${o.id}">${o.id}</button></td>
                    <td><strong>${escapeHtml(o.customerName || 'Guest')}</strong></td>
                    <td>${itemCount} item${itemCount === 1 ? '' : 's'}</td>
                    <td><strong>${formatMoney(o.total)}</strong></td>
                    <td>${formatDate(o.createdAt)}</td>
                    <td>
                        <select class="status-select ${statusClass(o.status)}" data-status-id="${o.id}">
                            ${['Pending','Preparing','Ready','Completed','Cancelled'].map(s =>
                                `<option value="${s}" ${s === o.status ? 'selected' : ''}>${s}</option>`
                            ).join('')}
                        </select>
                    </td>
                    <td>
                        <button class="action-btn view-btn" data-open="${o.id}" title="View order">View</button>
                        <button class="action-btn delete-btn" data-delete="${o.id}" title="Delete order">Delete</button>
                    </td>
                </tr>
            `;
        }).join('');
    }

    function renderAnalytics() {
        const orders = OrderStore.getAll();
        const nonCancelled = orders.filter(o => o.status !== 'Cancelled');
        const revenue = nonCancelled.reduce((s, o) => s + Number(o.total || 0), 0);
        const avg = nonCancelled.length ? revenue / nonCancelled.length : 0;

        const itemMap = {};
        orders.forEach(o => (o.items || []).forEach(item => {
            itemMap[item.name] = (itemMap[item.name] || 0) + Number(item.qty || 0);
        }));
        const topItems = Object.entries(itemMap).sort((a,b) => b[1] - a[1]).slice(0, 5);

        analyticsGrid.innerHTML = `
            <div class="analytics-card">
                <h3>Sales Overview</h3>
                <div class="analytics-stat"><span>Total Revenue</span><strong>${formatMoney(revenue)}</strong></div>
                <div class="analytics-stat"><span>Average Order</span><strong>${formatMoney(avg)}</strong></div>
                <div class="analytics-stat"><span>Valid Orders</span><strong>${nonCancelled.length}</strong></div>
            </div>
            <div class="analytics-card">
                <h3>Order Status</h3>
                ${['Pending','Preparing','Ready','Completed','Cancelled'].map(s => {
                    const count = orders.filter(o => o.status === s).length;
                    const pct = orders.length ? Math.round(count / orders.length * 100) : 0;
                    return `<div class="bar-row"><span>${s}</span><div class="bar-track"><i style="width:${pct}%"></i></div><b>${count}</b></div>`;
                }).join('')}
            </div>
            <div class="analytics-card">
                <h3>Popular Items</h3>
                ${topItems.length ? topItems.map(([name,count], i) =>
                    `<div class="rank-row"><span class="rank">${i+1}</span><span>${escapeHtml(name)}</span><strong>${count} sold</strong></div>`
                ).join('') : '<p class="muted">No order data yet.</p>'}
            </div>
        `;
    }

    function renderAll() {
        renderKPIs();
        renderOrders();
        renderAnalytics();
    }

    function openOrder(id) {
        const order = OrderStore.getAll().find(o => o.id === id);
        if (!order) return;

        modalId.textContent = order.id;
        modalTime.textContent = formatDate(order.createdAt);

        const items = (order.items || []).map(item => `
            <div class="detail-item">
                <div>
                    <strong>${escapeHtml(item.name)}</strong>
                    <small>
                        Qty: ${item.qty}
                        ${item.size ? ` · Size: ${escapeHtml(item.size)}` : ''}
                        ${(item.extras || []).length ? ` · ${item.extras.map(escapeHtml).join(', ')}` : ''}
                    </small>
                </div>
                <strong>${formatMoney(item.lineTotal || (item.unitPrice * item.qty))}</strong>
            </div>
        `).join('');

        modalBody.innerHTML = `
            <div class="detail-customer"><span>Customer</span><strong>${escapeHtml(order.customerName || 'Guest')}</strong></div>
            <div class="detail-status"><span>Status</span><span class="status-pill ${statusClass(order.status)}">${order.status}</span></div>
            <div class="detail-items">${items || '<p>No items.</p>'}</div>
            ${order.note ? `<div class="detail-note"><span>Note</span><p>${escapeHtml(order.note)}</p></div>` : ''}
            <div class="detail-totals">
                <div><span>Subtotal</span><span>${formatMoney(order.subtotal)}</span></div>
                <div><span>Tax</span><span>${formatMoney(order.tax)}</span></div>
                <div class="grand"><span>Total</span><strong>${formatMoney(order.total)}</strong></div>
            </div>
        `;
        modal.classList.add('open');
    }

    function closeOrder() {
        modal.classList.remove('open');
    }

    function escapeHtml(value) {
        return String(value ?? '').replace(/[&<>"']/g, ch => ({
            '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'
        }[ch]));
    }

    loginForm.addEventListener('submit', e => {
        e.preventDefault();
        if (username.value.trim() === USERNAME && password.value === PASSWORD) {
            sessionStorage.setItem(AUTH_KEY, 'true');
            loginError.textContent = '';
            loginForm.reset();
            showDashboard();
        } else {
            loginError.textContent = 'Invalid username or password.';
            password.select();
        }
    });

    pwdToggle.addEventListener('click', () => {
        password.type = password.type === 'password' ? 'text' : 'password';
    });

    logoutBtn.addEventListener('click', () => {
        sessionStorage.removeItem(AUTH_KEY);
        closeOrder();
        showLogin();
    });

    refreshBtn.addEventListener('click', () => {
        renderAll();
        showToast('Orders refreshed.');
    });

    clearAllBtn.addEventListener('click', () => {
        if (!OrderStore.getAll().length) {
            showToast('There are no orders to clear.');
            return;
        }
        if (confirm('Delete all orders? This cannot be undone.')) {
            OrderStore.clearAll();
            renderAll();
            showToast('All orders deleted.');
        }
    });

    search.addEventListener('input', () => {
        currentSearch = search.value;
        renderOrders();
    });

    statusFilters.addEventListener('click', e => {
        const btn = e.target.closest('.sf-btn');
        if (!btn) return;
        activeStatus = btn.dataset.status;
        statusFilters.querySelectorAll('.sf-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        renderOrders();
    });

    tbody.addEventListener('click', e => {
        const open = e.target.closest('[data-open]');
        const del = e.target.closest('[data-delete]');
        if (open) openOrder(open.dataset.open);
        if (del) {
            const id = del.dataset.delete;
            if (confirm(`Delete ${id}?`)) {
                OrderStore.delete(id);
                renderAll();
                showToast('Order deleted.');
            }
        }
    });

    tbody.addEventListener('change', e => {
        const select = e.target.closest('[data-status-id]');
        if (!select) return;
        OrderStore.updateStatus(select.dataset.statusId, select.value);
        renderAll();
        showToast('Order status updated.');
    });

    document.querySelectorAll('.sidebar-link[data-view]').forEach(link => {
        link.addEventListener('click', e => {
            e.preventDefault();
            const view = link.dataset.view;
            document.querySelectorAll('.sidebar-link[data-view]').forEach(x => x.classList.remove('active'));
            link.classList.add('active');
            document.querySelectorAll('.view').forEach(x => x.classList.remove('active'));
            $(`view-${view}`).classList.add('active');
            $('view-title').textContent = view === 'orders' ? 'Orders' : 'Analytics';
            $('view-subtitle').textContent = view === 'orders' ? 'Manage incoming café orders' : 'Overview of your order data';
            if (view === 'analytics') renderAnalytics();
            sidebar.classList.remove('open');
            overlay.classList.remove('active');
        });
    });

    menuToggle.addEventListener('click', () => {
        sidebar.classList.add('open');
        overlay.classList.add('active');
    });
    sidebarClose.addEventListener('click', () => {
        sidebar.classList.remove('open');
        overlay.classList.remove('active');
    });
    overlay.addEventListener('click', () => {
        sidebar.classList.remove('open');
        overlay.classList.remove('active');
    });

    modalClose.addEventListener('click', closeOrder);
    modal.addEventListener('click', e => { if (e.target === modal) closeOrder(); });
    document.addEventListener('keydown', e => {
        if (e.key === 'Escape') closeOrder();
    });

    window.addEventListener('storage', () => {
        if (isAuthenticated()) renderAll();
    });

    if (isAuthenticated()) showDashboard();
    else showLogin();
})();
