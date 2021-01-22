import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { Transaction } from "../models/transaction.model";

@Injectable()
export class TransactionState{
    private transaction$ = new BehaviorSubject<Transaction[]>([]);

    getTransaction() {
        return this.transaction$.asObservable();
    }

    setTransaction(tickets :Transaction[]) {
        this.transaction$.next(tickets);
    }

    addTransaction(transaction :Transaction) {
        const currentValue = this.transaction$.getValue();
        this.transaction$.next([...currentValue, transaction]);
    }

    updateTransaction(transaction :Transaction) {
        const currentTransactionsList = this.transaction$.getValue();
        const indexOfUpdated = currentTransactionsList.findIndex(transactionItem => transaction.id == transactionItem.id  ); 
        currentTransactionsList[indexOfUpdated] = transaction ;
    }

    updateTransactionById(id:number, updatedTransaction:Transaction) {
        const currentTransactionsList = this.transaction$.getValue();
        const indexToUpdate = currentTransactionsList.findIndex(transaction => transaction.id == id);
        currentTransactionsList[indexToUpdate] = updatedTransaction;
    }

    removeTransaction(transaction: Transaction) {
        const currentValue = this.transaction$.getValue();
        this.transaction$.next(currentValue.filter(transactionItem => transactionItem !== transaction));
      }
}