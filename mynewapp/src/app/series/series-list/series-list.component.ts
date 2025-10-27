import { Component, OnInit } from '@angular/core';
import { SeriesService } from '../../services/series.service';
import { Serie } from '../series.model';

@Component({
  selector: 'app-series-list',
  standalone: false,
  templateUrl: './series-list.component.html',
  styleUrl: './series-list.component.css'
})

export class SeriesListComponent implements OnInit {
  series: Serie[] = [];
  averageSeasons: number = 0;
  serieSeleccionada: Serie | null = null;


  constructor(private seriesService: SeriesService) {}

  ngOnInit() {
    this.seriesService.getSeries().subscribe(data => {
      this.series = data;
      this.averageSeasons = this.series.reduce((sum, s) => sum + s.seasons, 0) / this.series.length;
    });
  }
}
