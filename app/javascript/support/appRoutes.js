
var AppRoutes = {
  root: '/',
  itemsAutocomplete: '/items/autocomplete',
  customers: '/customers',
  customer: function(id) { return '/customers/' + id; },
  customersAutocomplete: '/customers/autocomplete',
  purchaseOrders: '/purchase_orders',
  purchaseOrder: (id) => '/purchase_orders/' + id,
  newPurchaseOrder: '/purchase_orders/new',
  lineItems: function(po_id) {
    return '/purchase_orders/' + po_id + '/line_items';
  },
  lineItem: function(po_id, li_id) {
    return '/purchase_orders/' + po_id + '/line_items/' + li_id;
  },
  items: '/items',
  item: function(id) { return '/items/' + id; },
  session: '/session'
};

export { AppRoutes };

