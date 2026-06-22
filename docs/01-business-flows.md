# Business Flows

## User Segmentation

- Retailer sees `retail_price`.
- Wholesaler sees `wholesale_price` after admin approval.
- Collaborator sees `collaborator_price` and can earn commission through affiliate links.
- Admin APIs are protected through `x-user-role: admin`.

## Coupon Rules

- `WELCOME10` applies to retailer orders from 300,000 VND.
- `WHOLE50` applies to wholesaler and collaborator orders from 2,000,000 VND.
- The backend rejects coupons that do not match role or minimum value.

## Digital Inventory

Products are catalog records. Credentials are real sellable items containing username, password, cookie, expiry date, and sale status.

Checkout must reserve credentials inside one transaction. The current MVP uses `inventory_lock`; production should replace this with a database transaction and row-level lock.

## Warranty

Every paid order receives `warranty_until`. Customers can open warranty tickets before expiry. Admin can approve a replacement, and the system reserves one new credential from the pool.

## Finance

Wallet topups create income ledger entries. Paid orders create income entries and inventory cost entries. Dashboard net profit is `revenue - expense`.

## Order History

The system stores final order total, discount, purchased time, warranty expiry, and sold credentials for each order.

## Chat Negotiation

Customer chat starts with product context. Admin can create a negotiated offer and send a checkout link back into the chat thread.
