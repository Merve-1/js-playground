## Simulated Banking Program

### Requirements

1. **Set login credentials**
   - Define a demo username and password.

2. **Login**
   - Ask the user to enter their username and password.
   - Allow access only if both credentials are correct.

3. **Display the banking menu**
   - After successful login, display these options:
     - **A.** Check balance
     - **B.** Deposit money
     - **C.** Withdraw money
     - **D.** Exit

4. **Ask for the transaction amount**
   - Request the relevant amount when the user chooses to deposit or withdraw money.

5. **Validate transaction amounts**
   - Reject zero or negative amounts.

6. **Prevent overdrafts**
   - Reject withdrawals greater than the current balance.

7. **Update the balance**
   - Add deposits to the balance.
   - Subtract successful withdrawals from the balance.

8. **Display the final balance**
   - Show the updated balance before the program exits.

### Bonus Challenges

- Reject invalid menu choices.
- Display an error message for incorrect login credentials.
- Allow the user to perform multiple transactions before exiting.
- Ensure the balance never becomes negative.
