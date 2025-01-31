import { SQLiteDBConnection } from '@capacitor-community/sqlite';
import { Injectable} from '@angular/core';
import { SQLiteService } from './sqlite.service';


import { User } from '../models/user';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable()
export class StorageService {
    public userList: BehaviorSubject<User[]> =
                                new BehaviorSubject<User[]>([]);
    private databaseName: string = "";


    private db!: SQLiteDBConnection;
    private isUserReady: BehaviorSubject<boolean> = new BehaviorSubject(false);

    constructor(private sqliteService: SQLiteService) {
    }
    async initializeDatabase(dbName: string) {
        this.databaseName = dbName;
        // create upgrade statements
        
        // create and/or open the database
        this.db = await this.sqliteService.openDatabase(
                                            this.databaseName,
                                            false,
                                            'no-encryption',
                                            1,
                                            false
        );
        this.db.execute(`CREATE TABLE IF NOT EXISTS users(
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          name TEXT NOT NULL,
          active INTEGER DEFAULT 1
          );`);


        await this.getUsers();
    }
    // Current database state
    userState() {
        return this.isUserReady.asObservable();
    }
    fetchUsers(): Observable<User[]> {
        return this.userList.asObservable();
    }

    async loadUsers() {
        const users: User[]= (await this.db.query('SELECT * FROM users;')).values as User[];
        this.userList.next(users);
    }
    // CRUD Operations
    async getUsers() {
        await this.loadUsers();
        this.isUserReady.next(true);
    }
    async addUser(name: string) {
        const sql = `INSERT INTO users (name) VALUES (?);`;
        await this.db.run(sql,[name]);
        await this.getUsers();
    }

    async updateUserById(id: string, active: number) {
        /*const sql = `UPDATE users SET active=${active} WHERE id=${id}`;
        await this.db.run(sql);
        await this.getUsers();*/
    }
    async deleteUserById(id: string) {
        const sql = `DELETE FROM users WHERE id=${id}`;
        await this.db.run(sql);
        await this.getUsers();
    }
    async deleteAll(){
        const sql= `DELETE FROM users`;
        await this.db.execute(sql);
        await this.getUsers();
    }
}