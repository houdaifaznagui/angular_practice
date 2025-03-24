import { Component } from "@angular/core";

@Component(
    {
        selector: 'hello-word',
        template: "<h1>{{title}}</h1>",
        styles: [`h1
        {
            color:blue;
        }`]
    }) 

export class HelloWord
{
    title='hello word';
}