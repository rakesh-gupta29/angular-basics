import { Component, OnInit } from '@angular/core';
import { Team } from 'src/app/models/team/team';
import { WarningModal } from 'src/app/services/warningModal/warning-modal';
import { Teams } from 'src/app/services/teams/teams';
@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css'],
})
export class TeamsComponent implements OnInit {
  public teams!: Array<Team>;
  constructor(private warningModal: WarningModal, private teamService: Teams) {
    this.teams = [
      new Team(
        '100',
        'dummy  name',
        'this girl is quite good looking',
        'ceo',
        'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Z2lybCUyMGltYWdlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
        'https://www.linkedin.com/company/brain-wired/'
      ),
      new Team(
        '100',
        'dummy  name',
        'this girl is quite good looking',
        'ceo',
        'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Z2lybCUyMGltYWdlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
        'https://www.linkedin.com/company/brain-wired/'
      ),
      new Team(
        '100',
        'dummy  name',
        'this girl is quite good looking',
        'ceo',
        'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Z2lybCUyMGltYWdlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
        'https://www.linkedin.com/company/brain-wired/'
      ),
      new Team(
        '100',
        'dummy  name',
        'this girl is quite good looking',
        'ceo',
        'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Z2lybCUyMGltYWdlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
        'https://www.linkedin.com/company/brain-wired/'
      ),
      new Team(
        '100',
        'dummy  name',
        'this girl is quite good looking',
        'ceo',
        'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Z2lybCUyMGltYWdlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
        'https://www.linkedin.com/company/brain-wired/'
      ),
      new Team(
        '100',
        'dummy  name',
        'this girl is quite good looking',
        'ceo',
        'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Z2lybCUyMGltYWdlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
        'https://www.linkedin.com/company/brain-wired/'
      ),
      new Team(
        '100',
        'dummy  name',
        'this girl is quite good looking',
        'ceo',
        'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Z2lybCUyMGltYWdlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
        'https://www.linkedin.com/company/brain-wired/'
      ),
      new Team(
        '100',
        'dummy  name',
        'this girl is quite good looking',
        'ceo',
        'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Z2lybCUyMGltYWdlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
        'https://www.linkedin.com/company/brain-wired/'
      ),
      new Team(
        '100',
        'dummy  name',
        'this girl is quite good looking',
        'ceo',
        'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Z2lybCUyMGltYWdlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
        'https://www.linkedin.com/company/brain-wired/'
      ),
      new Team(
        '100',
        'dummy  name',
        'this girl is quite good looking',
        'ceo',
        'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Z2lybCUyMGltYWdlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
        'https://www.linkedin.com/company/brain-wired/'
      ),
      new Team(
        '100',
        'dummy  name',
        'this girl is quite good looking',
        'ceo',
        'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Z2lybCUyMGltYWdlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
        'https://www.linkedin.com/company/brain-wired/'
      ),
      new Team(
        '100',
        'dummy  name',
        'this girl is quite good looking',
        'ceo',
        'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Z2lybCUyMGltYWdlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
        'https://www.linkedin.com/company/brain-wired/'
      ),
      new Team(
        '100',
        'dummy  name',
        'this girl is quite good looking',
        'ceo',
        'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Z2lybCUyMGltYWdlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
        'https://www.linkedin.com/company/brain-wired/'
      ),
      new Team(
        '100',
        'dummy  name',
        'this girl is quite good looking',
        'ceo',
        'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Z2lybCUyMGltYWdlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
        'https://www.linkedin.com/company/brain-wired/'
      ),
      new Team(
        '100',
        'dummy  name',
        'this girl is quite good looking',
        'ceo',
        'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Z2lybCUyMGltYWdlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
        'https://www.linkedin.com/company/brain-wired/'
      ),
      new Team(
        '100',
        'dummy  name',
        'this girl is quite good looking',
        'ceo',
        'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Z2lybCUyMGltYWdlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
        'https://www.linkedin.com/company/brain-wired/'
      ),
      new Team(
        '100',
        'dummy  name',
        'this girl is quite good looking',
        'ceo',
        'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Z2lybCUyMGltYWdlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
        'https://www.linkedin.com/company/brain-wired/'
      ),
      new Team(
        '100',
        'dummy  name',
        'this girl is quite good looking',
        'ceo',
        'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Z2lybCUyMGltYWdlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
        'https://www.linkedin.com/company/brain-wired/'
      ),
      new Team(
        '100',
        'dummy  name',
        'this girl is quite good looking',
        'ceo',
        'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Z2lybCUyMGltYWdlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
        'https://www.linkedin.com/company/brain-wired/'
      ),
    ];
  }

  deleteCallback(id: string) {
    console.log('delete team member with id ', id);
  }
  handleDelete(id: string): void {
    this.warningModal.activate(() => this.deleteCallback(id));
  }

  ngOnInit(): void {}
}
