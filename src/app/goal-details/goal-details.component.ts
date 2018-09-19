import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import {Goal} from '../goal'
import {ActivatedRoute, ParamMap} from '@angular/router';
import { GoalService } from '../goals/goal.service';
@Component({
  selector: 'app-goal-details',
  templateUrl: './goal-details.component.html',
  styleUrls: ['./goal-details.component.css'],
  providers:[GoalService]

})
export class GoalDetailsComponent implements OnInit {

  @Input() goal:Goal;
  @Output() isComplete= new EventEmitter<boolean>();

  goalDelete(complete:boolean){
    this.isComplete.emit(complete);
  }
  constructor(private route:ActivatedRoute, private service : GoalService) { }

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');
    this.goal=this.service.getGoal(id);
  }

}
