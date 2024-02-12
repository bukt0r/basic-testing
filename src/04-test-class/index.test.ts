// Uncomment the code below and write your tests
import { InsufficientFundsError, SynchronizationFailedError, TransferFailedError, getBankAccount } from '.';

describe('BankAccount', () => {
  test('should create account with initial balance', () => {
    const mainAccount = getBankAccount(999);
    expect(mainAccount.getBalance()).toBe(999);
  });

  test('should throw InsufficientFundsError error when withdrawing more than balance', () => {
    const mainAccount = getBankAccount(999);
    expect(() => mainAccount.withdraw(1000)).toThrow(InsufficientFundsError);
  });

  test('should throw error when transferring more than balance', () => {
    const mainAccount = getBankAccount(999);
    const secondAccount = getBankAccount(1);
    expect(() => mainAccount.transfer(1000, secondAccount)).toThrow(
      InsufficientFundsError,
    );
  });

  test('should throw error when transferring to the same account', () => {
    const mainAccount = getBankAccount(999);
    expect(() => mainAccount.transfer(500, mainAccount)).toThrow(TransferFailedError);
  });

  test('should deposit money', () => {
    const mainAccount = getBankAccount(999);
    mainAccount.deposit(112);
    expect(mainAccount.getBalance()).toBe(1111);
  });

  test('should withdraw money', () => {
    const mainAccount = getBankAccount(999);
    mainAccount.withdraw(500);
    expect(mainAccount.getBalance()).toBe(499);
  });

  test('should transfer money', () => {
    const mainAccount = getBankAccount(999);
    const secondAccount = getBankAccount(1);
    mainAccount.transfer(99, secondAccount);
    expect(mainAccount.getBalance()).toBe(900);
    expect(secondAccount.getBalance()).toBe(100);
  });

  test('fetchBalance should return number in case if request did not failed', async () => {
    const mainAccount = getBankAccount(999);
    jest.spyOn(mainAccount, 'fetchBalance').mockResolvedValueOnce(1000);
    const balance = await mainAccount.fetchBalance();
    expect(balance).toBe(1000);
  });

  test('should set new balance if fetchBalance returned number', async () => {
    const mainAccount = getBankAccount(999);
    jest.spyOn(mainAccount, 'fetchBalance').mockResolvedValueOnce(1000);
    await mainAccount.synchronizeBalance();
    expect(mainAccount.getBalance()).toBe(1000);
  });

  test('should throw SynchronizationFailedError if fetchBalance returned null', async () => {
    const mainAccount = getBankAccount(999);
    jest.spyOn(mainAccount, 'fetchBalance').mockResolvedValueOnce(null);
    await expect(mainAccount.synchronizeBalance()).rejects.toThrow(
      SynchronizationFailedError,
    );
  });
});
