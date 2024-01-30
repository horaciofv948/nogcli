export class Adress {
  public string = '';
  public Street = '';
  CustomerId: number | undefined;
}
export class Contact {
  public FullName = '';
  public OfficeNumber = '';
  public Email = '';
  public CustomerId: number | undefined;
}
export class Customer {
  public Name = '';
  public CustomerNumber: number | undefined;
  public Id: number | undefined;
  public IsDeleted = false;
  public Created: Date | undefined;
}
