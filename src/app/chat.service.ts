import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor() { }
  // name: any;
  getName() {
    return {
      name: ''
    } 
  }

  getChat() {
    return {
      conversations: [
        {
          name: "Ramesh", time: "8:21 am", message: "Good Morning!!", latestMessageRead: true,
          messages: [
            { id: 1, body: 'Hello world', time: "10:20", me: true },
            { id: 2, body: 'How are you?', time: "10:21", me: false },
            { id: 3, body: 'I am fine thanks', time: "10:22", me: true },
            { id: 4, body: 'Glad to hear that', time: "10:22", me: false },
          ]
        },
        {
          name: "Vishnu", time: "8:21 am", message: "Good Morning!!", latestMessageRead: false,
          messages: [
            { id: 1, body: 'Hello world', time: "10:20", me: true },
            { id: 2, body: 'How are you?', time: "10:21", me: false },
            { id: 3, body: 'I am fine thanks', time: "10:22", me: true },
            { id: 4, body: 'Glad to hear that', time: "10:22", me: false },
          ]
        },
        {
          name: "ShUbham", time: "8:21 am", message: "Good Morning!!", latestMessageRead: false,
          messages: [
            { id: 1, body: 'Hello world', time: "10:20", me: true },
            { id: 2, body: 'How are you?', time: "10:21", me: false },
            { id: 3, body: 'I am fine thanks', time: "10:22", me: true },
            { id: 4, body: 'Glad to hear that', time: "10:22", me: false },
          ]
        },
        {
          name: "uamesh", time: "8:21 am", message: "Good Morning!!", latestMessageRead: true,
          messages: [
            { id: 1, body: 'Hello world', time: "10:20", me: true },
            { id: 2, body: 'How are you?', time: "10:21", me: false },
            { id: 3, body: 'I am fine thanks', time: "10:22", me: true },
            { id: 4, body: 'Glad to hear that', time: "10:22", me: false },
          ]
        },
        {
          name: "Mamesh", time: "7:21 am", message: "Good Morning!!", latestMessageRead: true,
          messages: [
            { id: 1, body: 'Hello world', time: "10:20", me: true },
            { id: 2, body: 'How are you?', time: "10:21", me: false },
            { id: 3, body: 'I am fine thanks', time: "10:22", me: true },
            { id: 4, body: 'Glad to hear that', time: "10:22", me: false },
          ]
        },
        {
          name: "Ganesh", time: "8:15 am", message: "Good Morning!!", latestMessageRead: true,
          messages: [
            { id: 1, body: 'Hello world', time: "10:20", me: true },
            { id: 2, body: 'How are you?', time: "10:21", me: false },
            { id: 3, body: 'I am fine thanks', time: "10:22", me: true },
            { id: 4, body: 'Glad to hear that', time: "10:22", me: false },
          ]
        },
        {
          name: "Ramesh", time: "8:01 am", message: "Good Morning!!", latestMessageRead: true,
          messages: [
            { id: 1, body: 'Hello world', time: "10:20", me: true },
            { id: 2, body: 'How are you?', time: "10:21", me: false },
            { id: 3, body: 'I am fine thanks', time: "10:22", me: true },
            { id: 4, body: 'Glad to hear that', time: "10:22", me: false },
          ]
        },
        {
          name: "RUshi", time: "8:21 am", message: "Good Morning!!", latestMessageRead: false,
          messages: [
            { id: 1, body: 'Hello world', time: "10:20", me: true },
            { id: 2, body: 'How are you?', time: "10:21", me: false },
            { id: 3, body: 'I am fine thanks', time: "10:22", me: true },
            { id: 4, body: 'Glad to hear that', time: "10:22", me: false },
          ]
        },
        {
          name: "Ram", time: "8:45 am", message: "Good Morning!!", latestMessageRead: false,
          messages: [
            { id: 1, body: 'Hello world', time: "10:20", me: true },
            { id: 2, body: 'How are you?', time: "10:21", me: false },
            { id: 3, body: 'I am fine thanks', time: "10:22", me: true },
            { id: 4, body: 'Glad to hear that', time: "10:22", me: false },
          ]
        },
        {
          name: "Sam", time: "8:21 am", message: "Good Morning!!", latestMessageRead: false,
          messages: [
            { id: 1, body: 'Hello world', time: "10:20", me: true },
            { id: 2, body: 'How are you?', time: "10:21", me: false },
            { id: 3, body: 'I am fine thanks', time: "10:22", me: true },
            { id: 4, body: 'Glad to hear that', time: "10:22", me: false },
          ]
        },
        {
          name: "Chikya", time: "8:21 am", message: "Good Morning!!", latestMessageRead: true,
          messages: [
            { id: 1, body: 'Hello world', time: "10:20", me: true },
            { id: 2, body: 'How are you?', time: "10:21", me: false },
            { id: 3, body: 'I am fine thanks', time: "10:22", me: true },
            { id: 4, body: 'Glad to hear that', time: "10:22", me: false },
          ]
        },
        {
          name: "Manoj", time: "8:45 am", message: "Good Morning!!", latestMessageRead: false,
          messages: [
            { id: 1, body: 'Hello world', time: "10:20", me: true },
            { id: 2, body: 'How are you?', time: "10:21", me: false },
            { id: 3, body: 'I am fine thanks', time: "10:22", me: true },
            { id: 4, body: 'Glad to hear that', time: "10:22", me: false },
          ]
        },
        {
          name: "Mangesh", time: "6:01 am", message: "Good Morning!!", latestMessageRead: false,
          messages: [
            { id: 1, body: 'Hello world', time: "10:20", me: true },
            { id: 2, body: 'How are you?', time: "10:21", me: false },
            { id: 3, body: 'I am fine thanks', time: "10:22", me: true },
            { id: 4, body: 'Glad to hear that', time: "10:22", me: false },
          ]
        },
        {
          name: "Vishal", time: "9:55 am", message: "Good Morning!!", latestMessageRead: true,
          messages: [
            { id: 1, body: 'Hello ', time: "10:20", me: true },
            { id: 2, body: 'How are you?', time: "10:21", me: false },
            { id: 3, body: 'I am fine thanks', time: "10:22", me: true },
            { id: 4, body: 'Glad to hear that', time: "10:22", me: false },
          ]
        },
      ]
    }
  }

}
