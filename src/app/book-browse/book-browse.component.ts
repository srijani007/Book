import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-book-browse',
  templateUrl: './book-browse.component.html',
  styleUrls: ['./book-browse.component.css']
})
export class BookBrowseComponent implements OnInit {
imgWidth = "50";
imgMargin = "2";
pageTitle = "Book ";
books : any[]=[
{ 
"bookLogo":"/assets/images/pngtree-hand-painted.jpg",
"bookId" :1,
"bookName" : "C",
"bookAuthor" : "Auhtor1",
"bookPrice" : 456.56,
"bookCategory":"Langauge"
},
{ 
  "bookLogo":"/assets/images/pngtree-hand-painted.jpg",
  "bookId" :2,
  "bookName" : "C++",
  "bookAuthor" : "Auhtor2",
  "bookPrice" : 567,
  "bookCategory":"Langauge"
  },
  { 
    "bookLogo":"/assets/images/pngtree-little-girl.jpg",
    "bookId" :3,
    "bookName" : "java",
    "bookAuthor" : "Auhtor3",
    "bookPrice" : 700,
    "bookCategory":"Langauge"
    },
    { 
      "bookLogo":"/assets/images/pngtree-pile-of-books.png",
      "bookId" :4,
      "bookName" : ".net",
      "bookAuthor" : "Auhtor4",
      "bookPrice" : 453,
      "bookCategory":"Framework"
      }
];
  constructor() { }

  ngOnInit(): void {
  }

}
