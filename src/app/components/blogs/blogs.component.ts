import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Blog } from 'src/app/models/blog/blog';
import { WarningModal } from 'src/app/services/warningModal/warning-modal';
@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css'],
})
export class BlogsComponent implements OnInit {
  blogs!: Array<Blog>;
  constructor(private router: Router, private warningModal: WarningModal) {}

  ngOnInit(): void {
    this.blogs = [
      new Blog(
        '100',
        'dummy title',
        'https://images.unsplash.com/photo-1545239351-ef35f43d514b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8YmxvZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
        ['react'],
        'this is dummy content',
        {
          name: 'dummy author',
          id: 'dummyd_id',
          avatar:
            'https://media.istockphoto.com/id/1437190064/photo/mohawk-robot.jpg?b=1&s=170667a&w=0&k=20&c=cENNhXeJ2oYPbfXrNG-e8OIjRXeV34sK8JCERMfcn7M=',
        },
        new Date(10, 10, 2021),
        'this is dummy subtitle',
        0
      ),
      new Blog(
        '100',
        'dummy title',
        'https://images.unsplash.com/photo-1545239351-ef35f43d514b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8YmxvZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
        ['react'],
        'this is dummy content',
        {
          name: 'dummy author',
          id: 'dummyd_id',
          avatar:
            'https://media.istockphoto.com/id/1437190064/photo/mohawk-robot.jpg?b=1&s=170667a&w=0&k=20&c=cENNhXeJ2oYPbfXrNG-e8OIjRXeV34sK8JCERMfcn7M=',
        },
        new Date(10, 10, 2021),
        'this is dummy subtitle',
        0
      ),
      new Blog(
        '100',
        'dummy title',
        'https://images.unsplash.com/photo-1545239351-ef35f43d514b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8YmxvZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
        ['react'],
        'this is dummy content',
        {
          name: 'dummy author',
          id: 'dummyd_id',
          avatar:
            'https://media.istockphoto.com/id/1437190064/photo/mohawk-robot.jpg?b=1&s=170667a&w=0&k=20&c=cENNhXeJ2oYPbfXrNG-e8OIjRXeV34sK8JCERMfcn7M=',
        },
        new Date(10, 10, 2021),
        'this is dummy subtitle',
        0
      ),
      new Blog(
        '100',
        'dummy title',
        'https://images.unsplash.com/photo-1545239351-ef35f43d514b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8YmxvZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
        ['react'],
        'this is dummy content',
        {
          name: 'dummy author',
          id: 'dummyd_id',
          avatar:
            'https://media.istockphoto.com/id/1437190064/photo/mohawk-robot.jpg?b=1&s=170667a&w=0&k=20&c=cENNhXeJ2oYPbfXrNG-e8OIjRXeV34sK8JCERMfcn7M=',
        },
        new Date(10, 10, 2021),
        'this is dummy subtitle',
        0
      ),
      new Blog(
        '100',
        'dummy title',
        'https://images.unsplash.com/photo-1545239351-ef35f43d514b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8YmxvZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
        ['react'],
        'this is dummy content',
        {
          name: 'dummy author',
          id: 'dummyd_id',
          avatar:
            'https://media.istockphoto.com/id/1437190064/photo/mohawk-robot.jpg?b=1&s=170667a&w=0&k=20&c=cENNhXeJ2oYPbfXrNG-e8OIjRXeV34sK8JCERMfcn7M=',
        },
        new Date(10, 10, 2021),
        'this is dummy subtitle',
        0
      ),
      new Blog(
        '100',
        'dummy title',
        'https://images.unsplash.com/photo-1545239351-ef35f43d514b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8YmxvZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
        ['react'],
        'this is dummy content',
        {
          name: 'dummy author',
          id: 'dummyd_id',
          avatar:
            'https://media.istockphoto.com/id/1437190064/photo/mohawk-robot.jpg?b=1&s=170667a&w=0&k=20&c=cENNhXeJ2oYPbfXrNG-e8OIjRXeV34sK8JCERMfcn7M=',
        },
        new Date(10, 10, 2021),
        'this is dummy subtitle',
        0
      ),
      new Blog(
        '100',
        'dummy title',
        'https://images.unsplash.com/photo-1545239351-ef35f43d514b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8YmxvZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
        ['react'],
        'this is dummy content',
        {
          name: 'dummy author',
          id: 'dummyd_id',
          avatar:
            'https://media.istockphoto.com/id/1437190064/photo/mohawk-robot.jpg?b=1&s=170667a&w=0&k=20&c=cENNhXeJ2oYPbfXrNG-e8OIjRXeV34sK8JCERMfcn7M=',
        },
        new Date(10, 10, 2021),
        'this is dummy subtitle',
        0
      ),

      new Blog(
        '100',
        'dummy title',
        'https://images.unsplash.com/photo-1545239351-ef35f43d514b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8YmxvZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
        ['react'],
        'this is dummy content',
        {
          name: 'dummy author',
          id: 'dummyd_id',
          avatar:
            'https://media.istockphoto.com/id/1437190064/photo/mohawk-robot.jpg?b=1&s=170667a&w=0&k=20&c=cENNhXeJ2oYPbfXrNG-e8OIjRXeV34sK8JCERMfcn7M=',
        },
        new Date(10, 10, 2021),
        'this is dummy subtitle',
        0
      ),
    ];
  }
  deleteCallback(id: string) {
    console.log('delete the blog with id ', id);
  }

  handleDelete(id: string) {
    this.warningModal.activate(() => this.deleteCallback(id));
  }
  handleEdit(id: string) {
    this.router.navigate(['blog', 'edit', id]);
  }
}
