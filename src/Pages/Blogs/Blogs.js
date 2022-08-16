import React from 'react';

const Blogs = () => {
    return (
        <div className='px-2'>
            <div>
                <h1 className='font-extrabold'>Difference between javascript and nodejs ...</h1>
                <p>Javascript is a programming language that is used for writing scripts on the website.Javascript can only be run in the browsers.	It is basically used on the client-side.Javascript can run in any browser engine as like JS core in safari and Spidermonkey in Firefox.Javascript is used in frontend development. Some of the javascript frameworks are RamdaJS, TypedJS, ReactJS etc.</p><br />
                <p>NodeJS is a Javascript runtime environment.We can run Javascript outside the browser with the help of NodeJS.	It is mostly used on the server-side.V8 is the Javascript engine inside of node.js that parses and runs Javascript. Nodejs is used in server-side development.Some of the Nodejs modules are Lodash, express etc.</p>
            </div><br /><br />
            <div>
                <h1 className='font-extrabold'>When should you use nodejs and when should you use mongodb?</h1>
                <p>As we know, JavaScript was created only for browsers. Previously JavaScript was used only to make websites interactive. Only browsers can understand JavaScript code. But in 2009, a software engineer named Ryan Dahl brought NodeJS to the market. NodeJS is a runtime environment that converts JavaScript code into machine code. In other words, creating an environment on a computer to run JavaScript code outside of a browser.</p><br />
                <p>MongoDB is an open-source document-oriented NoSQL database. It is a dynamic database store system, i.e. mongodb is used to dynamically create, read, update, delete (CRUD operation) data in the database.</p>
            </div><br /><br />
            <div>
                <h1 className='font-extrabold'>Differences between sql and nosql databases ...</h1>
                <p>SQL databases are primarily called as Relational Databases RDBMS. SQL databases defines and manipulates data based structured query language.In almost all situations SQL databases are vertically scalable. This means that you can increase the load on a single server by increasing things like RAM, CPU or SSD. SQL databases are table-based. These databases are not suited for hierarchical data storage. These databases are best suited for complex queries.</p><br />
                <p>NoSQL database are primarily called as non-relational or distributed database.  NoSQL database has dynamic schema for unstructured data. NoSQL databases are horizontally scalable. This means that you handle more traffic by sharding, or adding more servers in your NoSQL database. NoSQL databases are either key-value pairs, document-based, graph databases or wide-column stores. These databases are best suited for hierarchical data storage. These databases are not so good for complex queries.</p>
            </div><br /><br />
            <div>
                <h1 className='font-extrabold'>What is the purpose of jwt and how does it work?</h1>
                <p>It means JSON WEB TOKEN. To put it simply, a token is a string of data that represents something else, such as an identity. In the case of authentication, a non-JWT based token is a string of characters that allow the receiver to validate the senders identity. The important distinction here is lack of meaning within the characters themselves. </p><br />
                <p>JWTs differ from other web tokens in that they contain a set of claims. Claims are used to transmit information between two parties. What these claims are depends on the use case at hand. For example, a claim may assert who issued the token, how long it is valid for, or what permissions the client has been granted.
                A JWT is a string made up of three parts, separated by dots (.), and serialized using base64. In the most common serialization format, compact serialization, the JWT looks something like this: xxxxx.yyyyy.zzzzz.</p>
            </div><br /><br />
        </div>
    );
};

export default Blogs;