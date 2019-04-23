import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface user {
	id: number;
	name: string;
}

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
	users;
	searchedUser = '';
	selectedUser: user;

	constructor(private httpClient: HttpClient) {}
	ngOnInit() {
		this.httpClient.get('../assets/users.json').subscribe((res: any) => {
			this.users = res.result;
		});
	}

	showData(name: string) {
		// this.users.forEach((user, index) => {
		//   if (user.id === id) {
		//     this.selectedUser = this.users[index];
		//   }
		// });
		this.selectedUser = this.users.find(item => item.name === name);
	}
	clear() {
		this.selectedUser = null;
	}
}
