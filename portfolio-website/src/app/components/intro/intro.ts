import { Component } from '@angular/core';

@Component({
  selector: 'app-intro',
  imports: [],
  templateUrl: './intro.html',
  styleUrl: './intro.css'
})
export class Intro {

  // This is the "Dummy" function. 
  // It accepts the ID but does nothing, which stops the red error.
  scrollTo(sectionId: string) {
    // Logic can be added here later!
    console.log('Scroll requested to:', sectionId);
  }

}
