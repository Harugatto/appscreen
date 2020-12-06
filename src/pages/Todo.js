import React from 'react'
import NavBar from '../components/Navbar'
import TodoTemplate from '../components/TodoTemplate';
import TodoHead from '../components/TodoHead';
import TodoList from '../components/TodoList';
import TodoCreate from '../components/TodoCreate';
import { TodoProvider } from '../TodoContext';

export default function Todo() {
    return (
      <TodoProvider>
        <NavBar title="😘"/>
        <TodoTemplate>
          <TodoHead />
          <TodoList />
          <TodoCreate />
        </TodoTemplate>
      </TodoProvider>
    );
  }
  