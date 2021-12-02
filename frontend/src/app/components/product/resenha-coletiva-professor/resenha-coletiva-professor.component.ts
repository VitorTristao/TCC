import { Component, OnInit } from '@angular/core';
import { Product } from '../product.model';
import { ProductService } from '../product.service';


@Component({
  selector: 'app-resenha-coletiva-professor',
  templateUrl: './resenha-coletiva-professor.component.html',
  styleUrls: ['./resenha-coletiva-professor.component.css']
})
export class ResenhaColetivaProfessorComponent implements OnInit {

  products!: Product[]
  displayedColumns = ['id', 'texto', 'action']

  constructor(private productService: ProductService) { 
    this.products = [];

  }

  ngOnInit(): void {
    this.productService.read().subscribe(products => {
      this.products = products
    });
  }

}
