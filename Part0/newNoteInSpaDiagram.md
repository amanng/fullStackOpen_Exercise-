```Mermaid
  sequenceDiagram
    participant user
    participant browser
    participant server
    user->>browser: write note and click save
    Note right of browser: Note: Browser capture the user input 
    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note
    activate server
    Note right of server: server recieve new note data and save it
    server->>browser: {content: "test", date: "2025-09-30T12:55:56.729Z"}
    deactivate server
    Note right of browser: browser dynamically update the page
    browser->>browser:browser render new note in the list
```