import React from "react";
import PageTitle from "../../PageTitle/PageTitle";

const Blog = () => {
  return (
    <div className="toy-container min-h-screen">
      <PageTitle title="Blog" />
      <div>
        <h2 className="text-center text-4xl font-bold text-[#ff8c9a]">Blog</h2>
        <div className="space-y-4 mt-8 p-4 ">
          <h2 className="lg:text-2xl font-bold">1. What is an access token and refresh token? How do they work and where should we store them on the client-side?</h2>

          <p className="text-lg font-normal">
            <span className="text-lg font-semibold">Access Toke:</span> An access token is a short-lived, encrypted string that is used to access protected resources. It is typically issued by an
            authorization server to a client application, such as a web browser or mobile app, after the user has authenticated with the authorization server. Access tokens are typically used to
            access resources that are not publicly available, such as user data or private APIs.By default, an access token has lifetime 60-minute.
          </p>
          <p className="text-lg font-normal">
            <span className="text-lg font-semibold">Refresh Token:</span> A refresh token is a long-lived, encrypted string that is used to obtain new access tokens. It is typically issued by an
            authorization server to a client application, such as a web browser or mobile app, after the user has authenticated with the authorization server. Refresh tokens are typically used to
            obtain new access tokens when the old access token has expired or been revoked.By default, an Refresh token has lifetime 365days
          </p>
          <p className="text-lg font-normal">Access tokens and refresh tokens are typically stored on the client-side, such as in the browsers local storage or in a cookie.</p>

          <div className="inline-flex items-center justify-center w-full mt-6">
            <hr className="w-96 h-1 my-8 bg-gray-200 border-0 rounded " />
            <div className="absolute px-4 -translate-x-1/2 bg-white left-1/2 ">
              <svg aria-hidden="true" className="w-5 h-5 text-[#ff8c9a]" viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
                  fill="currentColor"
                />
              </svg>
            </div>
          </div>
        </div>
        {/* Q:2  */}
        <div className="space-y-4 mt-8 p-4 ">
          <h2 className="lg:text-2xl font-bold">2. Compare SQL and NoSQL databases?</h2>

          <h3 className="text-lg font-semibold">SQL DataBases:</h3>
          <ul className="list-decimal ml-5">
            <li className="text-lg">
              Relational database management system <span className="font-bold ">Short Form:(RDBMS)</span>
            </li>
            <li className="text-lg">SQL databases are based on a structured schema</li>
            <li className="text-lg">These databases are not suited for hierarchical data storage.</li>
            <li className="text-lg">These databases are best suited for complex queries</li>
            <li className="text-lg">Follows ACID property (ACID : Atomicity, Consistency, Isolation, and Durability)</li>
            <li className="text-lg">Examples: MySQL, PostgreSQL, Oracle, MS-SQL Server, etc.</li>
          </ul>
          <h3 className="text-lg font-semibold">NoSQL DataBases:</h3>
          <ul className="list-decimal ml-5">
            <li className="text-lg">Non-relational or distributed database system.</li>
            <li className="text-lg">NoSQL databases are schema-less or have a flexible schema.</li>
            <li className="text-lg">These databases are best suited for hierarchical data storage.</li>
            <li className="text-lg">These databases are not so good for complex queries</li>
            <li className="text-lg">Follows CAP (Consistency, Availability, Partition tolerance)</li>
            <li className="text-lg">Examples: MongoDB, Cassandra, Amazon DynamoDB, Redis etc.</li>
          </ul>

          <div className="inline-flex items-center justify-center w-full mt-6">
            <hr className="w-96 h-1 my-8 bg-gray-200 border-0 rounded " />
            <div className="absolute px-4 -translate-x-1/2 bg-white left-1/2 ">
              <svg aria-hidden="true" className="w-5 h-5 text-[#ff8c9a]" viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
                  fill="currentColor"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* Q:3  */}
        <div className="space-y-4 mt-8 p-4 ">
          <h2 className="lg:text-2xl font-bold">3. What is express js? What is Nest JS</h2>

          <p className="text-lg font-normal">
            <span className="text-lg font-semibold">Express js:</span> Express.js is a popular and minimalistic web application framework for Node.js. It provides a set of features and utilities that
            simplify the process of building web applications and APIs. Express.js allows developers to handle HTTP requests and responses, define routes, manage middleware.
          </p>
          <p className="text-lg font-normal">
            <span className="text-lg font-semibold">Nest js:</span> NestJS is a progressive Node.js framework built on top of Express that provides a more robust and feature-rich platform for building
            web applications. It uses TypeScript, which is a superset of JavaScript that provides type safety and other benefits. NestJS also provides a number of features that make it easier to build
            scalable and maintainable web applications, such as dependency injection, routing, and templating.
          </p>

          <div className="inline-flex items-center justify-center w-full mt-6">
            <hr className="w-96 h-1 my-8 bg-gray-200 border-0 rounded " />
            <div className="absolute px-4 -translate-x-1/2 bg-white left-1/2 ">
              <svg aria-hidden="true" className="w-5 h-5 text-[#ff8c9a]" viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
                  fill="currentColor"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
