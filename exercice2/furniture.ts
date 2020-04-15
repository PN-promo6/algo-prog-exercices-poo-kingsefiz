class Furniture {
  editor: string;
  designer: string;
  year: number;

  constructor(editor: string, designer: string, year: number) {
    this.editor = editor;
    this.designer = designer;
    this.year = year;
  }
}

let wassily: Furniture = new Furniture("Knoll", "Marcel Breuer", 1925);
console.log(wassily.editor, wassily.designer, wassily.year);

wassily.year = 1926;
console.log(wassily.year) 
