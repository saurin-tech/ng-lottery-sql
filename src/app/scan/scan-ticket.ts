import { Shift } from '../shift/shift';
import { Book } from '../book/book';

export class ScanTicket {

    id:number;
    
    bookNumber:number;
    
    openingTicketNumber:number;
    
    closingTicketNumber:number;
    
    numberOfTicketsSold:number;
    
    valueOfTicketsSold:number;
    
    shift:Shift;
    
    book:Book;
}
