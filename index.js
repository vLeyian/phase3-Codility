def solution(A, D):
    # Initialize balance and dictionaries to track monthly card payments and costs
    balance = 0
    monthly_card_payments = {}
    monthly_card_cost = {}
    
    # Iterate through transactions
    for i in range(len(A)):
        amount = A[i]
        date = D[i]
        
        # Update balance
        balance += amount
        
        # Extract month from date
        month = date[:7]
        
        # Track card payments and costs
        if amount < 0:
            monthly_card_payments[month] = monthly_card_payments.get(month, 0) + 1
            monthly_card_cost[month] = monthly_card_cost.get(month, 0) + abs(amount)
    
    # Apply fees for months with less than three card payments totaling less than 100
    for month, payments in monthly_card_payments.items():
        cost = monthly_card_cost.get(month, 0)
        if payments < 3 or cost < 100:
            balance -= 5
