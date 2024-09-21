import { Component } from "react";

class Demo extends Component {
    constructor() {
        super();
        this.record = [
            {
                id: 1,
                name: 'John',
                age: 24,
                language: 'JavaScript',
                occupation: 'Developer',
                course: ["js", "jquery", "reactjs"],
            },
            {
                id: 2,
                name: 'Jane',
                age: 25,
                language: 'python',
                occupation: 'Data Analyst',
                course: ["js", "nodejs"],
            },
            {
                id: 3,
                name: 'Richard',
                age: 26,
                language: 'java',
                occupation: 'Software Engineer',
                course: ["html", "css", "bootstrap"],
            }
        ];
        this.todo = [
            { id: 1, task: "reading" },
            { id: 2, task: "coding" },
            { id: 3, task: "swimming" },
        ];
    }

    render() {
        return (
            <div align="center">
                <h2>view Users</h2>
                <table border={1}>
                    <thead>
                        <tr>
                            <th>srno.</th>
                            <th>Name</th>
                            <th>Age</th>
                            <th>Language</th>
                            <th>Occupation</th>
                            <th>Course</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.record.map((val, index) => {
                                const { id, name, age, language, occupation, course } = val;
                                return (
                                    <tr key={++index}>
                                        <td>{++index}</td>
                                        <td>{name}</td>
                                        <td>{age}</td>
                                        <td>{language}</td>
                                        <td>{occupation}</td>
                                        <td>
                                            <table border={1}>
                                                {
                                                    course.map((c) => {
                                                        return (
                                                            <tr>
                                                                <td>{c}</td>
                                                            </tr>
                                                        )
                                                    })
                                                }
                                            </table>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
                <h2>Todo List</h2>
              <table border={1}>
              <thead>
                    <tr>
                        <th>Srno</th>
                        <th>Task</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.todo.map((t, i) => {
                            return (
                                <tr>
                                    <td> {++i}</td>
                                    <td> {t.task}</td>

                                </tr>
                            )
                        })
                    }
                </tbody>
              </table>
            </div>
        )
    }
}
export default Demo;