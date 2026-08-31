/*
 * orders.js — Shared Order Store
 * Reads/writes to localStorage so both the
 * customer site and admin panel share the same data.
 */

const ORDER_KEY = 'ss_orders';

const OrderStore = {
    /** Return all orders (newest first) */
    getAll() {
        try {
            return JSON.parse(localStorage.getItem(ORDER_KEY) || '[]');
        } catch {
            return [];
        }
    },

    /** Save a new order and return the saved object */
    save(order) {
        const orders = this.getAll();
        const newOrder = {
            id: 'ORD-' + Date.now(),
            customerName: order.customerName || 'Guest',
            items: order.items,          // [{name, qty, size, extras, unitPrice}]
            subtotal: order.subtotal,
            tax: order.tax,
            total: order.total,
            status: 'Pending',            // Pending | Preparing | Ready | Completed | Cancelled
            createdAt: new Date().toISOString(),
            note: order.note || ''
        };
        orders.unshift(newOrder);             // newest first
        localStorage.setItem(ORDER_KEY, JSON.stringify(orders));
        return newOrder;
    },

    /** Update the status of an order by ID */
    updateStatus(id, status) {
        const orders = this.getAll();
        const idx = orders.findIndex(o => o.id === id);
        if (idx > -1) {
            orders[idx].status = status;
            orders[idx].updatedAt = new Date().toISOString();
            localStorage.setItem(ORDER_KEY, JSON.stringify(orders));
            return orders[idx];
        }
        return null;
    },

    /** Delete an order by ID */
    delete(id) {
        const orders = this.getAll().filter(o => o.id !== id);
        localStorage.setItem(ORDER_KEY, JSON.stringify(orders));
    },

    /** Clear all orders */
    clearAll() {
        localStorage.removeItem(ORDER_KEY);
    }
};
