import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Database, TerminalSquare, Zap, Cloud } from "lucide-react";
import Button from "./ui/Button";

const Hero = () => {
  const handleButtonClick = () => {
    window.open("http://docs.harneetlang.com");
  };

  const codeTabs = useMemo(
    () => [
      {
        id: "assert",
        icon: TerminalSquare,
        label: "Assertions",
        headers: "vi ~assert.ha",
        description:
          "Ensure expectations in your programs with expressive assertions.",
        code: `package main

import fmt

function main() {
    // Test quick assertion
    var x = 10
    assert.Assert(x == 10, "x != 10")
    fmt.Println("Quick assertion test passed")

    // Test AssertEq
    assert.AssertEq("hello", "hello","string  matches")
    fmt.Println("String equality test passed")
    fmt.Println("Assert module working correctly!")

}
`,
      },
      {
        id: "database",
        icon: Database,
        label: "Databases",
        headers: "vi ~database.ha",
        description: "Connect and query relational stores using concise APIs.",
        code: `package main

import fmt, db, file, os

const SQLITE_DB = "complete_example_db.db"

var closeConnection = (con db.Connection) uint=> {
    assert.AssertIsOfType(con, "db.Connection")
    fmt.Println("Will close the connecttion")
    db.Close(con)
    fmt.Println("connection was closed!")
}

function main() {
    // set up the datbase connection
    // First if the sqlite database file exists in the current location

    ok, err := file.Exists(SQLITE_DB)
    if err != None {
        fmt.Println ("File does not exist.")
        os.Exit(1)
    }

    if ok == false {
        fmt.Println("File does not exist")
        // now let us create the database file
        var _, err = file.Touch(SQLITE_DB)
        if err != None {
            fmt.Println("Database file could not be created")
            os.Exit(1)
        } else {
            fmt.Println("Datbase file was created")
        }
    } else {
        fmt.Println("File exists")

    }

    // we have validated that the database file exists. Now we can start the connection details
    var con, err = db.Open("sqlite3", SQLITE_DB)
    

    if err != None {
        fmt.Println("Could not create a connecttion to the database. Error follows → ", err)
        os.Exit(1)
    } else {
        fmt.Println("Was able to create a connection to the database")
    }


    // we are now able to connect to the database. Let us first check if the table exists.
    var currentusertable, err = db.Query(con, "SELECT name FROM sqlite_master WHERE type='table' AND name='users'")
    if err != None {
        fmt.Println("There was an error reading from the database. The error is → ", err)
        closeConnection(con)
        os.Exit(1)
    }

    if 0 == len(currentusertable) {
        fmt.Println("user table does not exist. Will create the user table")
        var _, createErr = db.Exec(con, "CREATE TABLE IF NOT EXISTS users ( id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT NOT NULL, email TEXT UNIQUE NOT NULL, age INTEGER, created_at DATETIME DEFAULT CURRENT_TIMESTAMP )")

        if createErr != None {
            fmt.Printf("Create table error: %v\n", createErr)
            closeConnection(con)
            return
        } else {
            fmt.Println("User table created successfully")
        }
    } else {
        fmt.Println("user table exists. Will proceed ahead")
    }

    // table exists. Now add some records.
    var userData = {
        "name": "John Doe",
        "email": "john@example.com",
        "age": 30
    }

    var id, insertErr = db.Create(con, "users", userData)
    if insertErr == None {
        fmt.Printf("✅ Inserted user with ID: %d\n", id)
    } else {
        fmt.Println("Could not insert the record")
        closeConnection(con)
        os.Exit(1)
    }

    // will now validate that the user record was inserted
    var users, queryErr = db.Query(con, "SELECT * FROM users")
    if queryErr == None {
        fmt.Printf("✅ Found %d users in the table\n", len(users))
        for user in users {
            fmt.Printf("  - %s (%s, age: %d)\n",
            user.name, user.email, user.age)
        }
    } else {
        fmt.Println("There was an error reading from the database , error → ", querryErr)
    }
}
`,
      },
      {
        id: "concurrency",
        icon: Zap,
        label: "Concurrency",
        headers: "vi ~async.ha",
        description:
          "Spawn lightweight tasks and await results with structured concurrency.",
        code: `package main

import fmt

// Simple concurrency demo using do, await, and sleep
// Spawns two tasks that finish in different times and collects their results

function work(name string, ms int) string {
    fmt.Printf("start %s\n", name)
    sleep(ms)
    fmt.Printf("done  %s\n", name)
    return name
}

function main() {
    fmt.Println("\n=== Concurrency Demo: do / await / sleep ===")

    var t1 = do work("A", 150)
    var t2 = do work("B", 60)

    var r2 = await(t2)
    var r1 = await(t1)

    fmt.Printf("Results: %s %s\n", r1, r2)
    fmt.Println("✅ Concurrency example complete!\n")

} `,
      },
      {
        id: "api",
        icon: Cloud,
        label: "API Calls",
        headers: "vi ~api.ha",
        description:
          "Read data from remote services with friendly HTTP helpers.",
        code: `package main

import fmt
import http

function main() {
    var getResponse, getErr = http.Get("https://jsonplaceholder.typicode.com/todos/1")

    if getErr != None {
        fmt.Printf("Error: %s\n", getErr)
    } else {
        fmt.Println("Entire Response → ", getResponse)
        fmt.Println("Response Body → " , getResponse.body)
        fmt.Println("Status → ", getResponse.status)
    }

}
`,
      },
    ],
    [],
  );

  const [activeTab, setActiveTab] = useState(codeTabs[0]);

  return (
    <section className="relative overflow-hidden bg-[#0b0b0d]">
      <div className="absolute inset-0 bg-[linear-gradient(110deg,rgba(36,36,38,0.88),rgba(10,10,12,0.95)),radial-gradient(circle_at_top_left,rgba(72,72,74,0.22),transparent_60%),radial-gradient(circle_at_bottom_right,rgba(50,50,52,0.2),transparent_55%)]"></div>
      <div className="absolute inset-0 opacity-50 bg-[linear-gradient(rgba(72,72,74,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(72,72,74,0.12)_1px,transparent_1px)] bg-[size:140px_140px]"></div>

      <div className="relative z-10 mx-auto flex max-w-6xl flex-col gap-20 px-6 pt-28 pb-24">
        <div className="grid gap-16 lg:grid-cols-[1.15fr_0.85fr] items-start">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="space-y-10"
          >
            <div className="flex items-center gap-3">
              <span className="h-6 w-6 rounded-full bg-gradient-to-br from-[#f7ce68] via-[#f5b942] to-[#c98a1c] shadow-[0_0_18px_rgba(255,214,102,0.45)]"></span>
              <span className="rounded-full border border-[#232325] bg-[#111112]/90 px-4 py-1 text-xs uppercase tracking-[0.5em] text-[#e5e5ea]">
                Built for modern software needs
              </span>
            </div>

            <motion.h1
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-[64px] font-bold leading-tight text-slate-50"
            >
              The programming language{" "}
              <span className="text-[#d1d1d6]">you'll enjoy using 🎉</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="max-w-2xl text-base sm:text-lg text-slate-300 leading-relaxed"
            >
              Harneet is easy to understand. It has a syntax similar to Go
              (Golang) and borrows concepts and constructs from other
              programming languages such as Python, Rust, and C.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col gap-6"
            >
              <Button
                onClick={handleButtonClick}
                size="lg"
                variant="primary"
                className="w-full max-w-xs justify-center px-10 py-4 text-lg"
              >
                Get started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.25 }}
            className="relative"
          >
            <div className="absolute -top-6 right-10 h-32 w-32 rounded-full bg-[#3a3a3c]/25 blur-3xl"></div>
            <div className="absolute -bottom-8 left-6 h-36 w-36 rounded-full bg-[#2c2c2e]/25 blur-3xl"></div>

            <div className="relative overflow-hidden rounded-2xl border border-[#232325] bg-[#111112]/90 shadow-[0_45px_120px_rgba(0,0,0,0.45)]">
              <div className="flex items-center justify-between border-b border-[#232325] px-5 py-4 text-xs text-[#d1d1d6]">
                <span className="font-mono">docs.harneetlang.com</span>
                <span className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-emerald-400"></span>
                  Intro
                </span>
              </div>
              <div className="relative aspect-video">
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-[#1c1c1e]/55 via-transparent to-transparent"></div>
                <iframe
                  className="h-full w-full"
                  src="https://www.youtube.com/embed/Y7kYZ9uZNZs"
                  title="Harneet Programming Language Demo"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
            </div>

            <div className="mt-6 grid gap-4 rounded-2xl border border-[#232325] bg-[#111112]/90 p-6">
              <p className="font-mono text-xs uppercase tracking-[0.35em] text-[#d1d1d6]">
                Quick facts
              </p>
              <ul className="space-y-3 text-sm text-[#e5e5ea]">
                <li className="flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full bg-[#8e8e93]"></span>
                  Go-inspired syntax that reads top-down
                </li>
                <li className="flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full bg-[#8e8e93]"></span>
                  Borrowed ergonomics from Python, Rust, and C
                </li>
                <li className="flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full bg-[#8e8e93]"></span>
                  Batteries-included docs and examples
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
        <div className="grid gap-4 sm:grid-cols-4">
          {[
            "Simple syntax",
            "Runtime ready",
            "Community examples",
            "Linter + Autoformat",
          ].map((item) => (
            <div
              key={item}
              className="flex items-center gap-3 rounded-lg border border-[#232325] bg-[#111112]/90 px-4 py-3 font-mono text-xs uppercase tracking-[0.3em] text-[#e5e5ea]"
            >
              <span className="h-2 w-2 rounded-full bg-[#8e8e93]"></span>
              {item}
            </div>
          ))}
        </div>
        <div
          className="space-y-6 border-t border-slate-800/70 pt-10"
          id="syntax_runtime_tooling"
        >
          <div className="flex flex-wrap items-center justify-between gap-4 text-[11px] uppercase tracking-[0.35em] text-[#8e8e93]">
            <div className="flex items-center gap-3">
              <span className="h-1 w-16 rounded-full bg-gradient-to-r from-[#434346] to-[#1d1d1f]"></span>
              <span>Harneet</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="h-1 w-16 rounded-full bg-gradient-to-r from-[#434346] to-[#1d1d1f]"></span>
              <span>Syntax • Runtime • Tooling</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="h-1 w-16 rounded-full bg-gradient-to-r from-[#525254] to-[#2c2c2e]"></span>
              <span>Open Source</span>
            </div>
          </div>

          <div className="rounded-2xl border border-[#2c2c2e] bg-[#131315]/85 p-6 backdrop-blur-sm">
            <div className="grid gap-4 lg:grid-cols-[minmax(0,0.75fr)_minmax(0,1.25fr)] lg:items-start">
              <div>
                <p className="text-xs font-mono uppercase tracking-[0.35em] text-[#8e8e93]">
                  Examples
                </p>
                <h3 className="mt-2 text-xl font-semibold text-slate-100">
                  Build with confidence and clarity
                </h3>
              </div>
              <div className="w-full overflow-x-auto pb-2 -mx-1 px-1">
                <div className="flex w-max min-w-full justify-start lg:justify-end">
                  <div className="flex gap-2 rounded-full border border-[#2c2c2e] bg-[#1d1d1f]/80 p-1">
                    {codeTabs.map((tab) => {
                      const Icon = tab.icon;
                      const isActive = tab.id === activeTab.id;
                      return (
                        <button
                          key={tab.id}
                          onClick={() => setActiveTab(tab)}
                          className={`flex items-center gap-2 rounded-full px-4 py-2 text-xs font-mono uppercase tracking-[0.2em] transition-all duration-200 ${
                            isActive
                              ? "bg-[linear-gradient(135deg,#2b2b2f,#151517)] text-[#f5f5f7] shadow-[0_12px_28px_rgba(0,0,0,0.45)]"
                              : "text-[#8e8e93] hover:text-[#d1d1d6] hover:bg-[#1d1d1f]"
                          }`}
                        >
                          <Icon className="h-3.5 w-3.5" />
                          {tab.label}
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 grid gap-6 lg:grid-cols-[minmax(0,0.75fr)_minmax(0,1.25fr)]">
              <div className="space-y-3">
                <p className="text-sm text-slate-300">
                  {activeTab.description}
                </p>
                <ul className="space-y-2 text-xs text-[#8e8e93]">
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#8e8e93]"></span>
                    Reliable standard library helpers
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#8e8e93]"></span>
                    Ergonomic error handling built in
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#8e8e93]"></span>
                    Works across CLI, server, and tooling workflows
                  </li>
                </ul>
              </div>

              <div className="relative overflow-hidden rounded-xl border border-[#2c2c2e] bg-[#0d0d0f]/95 shadow-[0_30px_90px_rgba(0,0,0,0.45)]">
                <div className="flex items-center justify-between px-4 py-3 border-b border-[#232325] bg-[#111112]/85">
                  <div className="flex items-center gap-2">
                    <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]"></span>
                    <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]"></span>
                    <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]"></span>
                  </div>
                  <span className="text-xs font-medium tracking-[0.24em]  text-[#8e8e93]">
                    {activeTab.headers}
                  </span>
                  <div className="w-10" />
                </div>
                <pre className="relative overflow-x-auto overflow-y-auto px-5 py-10 text-sm leading-relaxed text-[#f5f5f7]/90 h-[320px]">
                  <code>{activeTab.code}</code>
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
