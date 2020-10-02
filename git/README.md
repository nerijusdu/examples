1. Clone/Pull repository
2. Create your branch. Name it like ‘feature/name
3. Create a folder with your name like name.
5. Create a helloWorld.txt file with the text ‘Hello World!’
6. Commit that file with message ‘My first commit’
7. Push this code to repo
8. Create a branch from your feature branch called conflict/name
9. Go to your conflict branch ( conflict/name )
10. Change helloWorld.txt file contents to ‘Hello World from merge-conflict branch!’
11. Commit and push your changes
12. Go back to your feature branch ( feature/name )
13. Change the contents of helloWorld.txt file to ‘Hello from feature branch!’
14. Commit and push your changes
15. Merge merge-conflict brach into your feature branch ( feature/name )
16. Resolve conflicts with your favourite editor. Your finished helloWorld.txt file contents should be:\
’Hello from feature branch!\
and\
Hello from merge-conflict branch!\
after successful merge conflict’
17. Commit and push your resolved merge conflict
18. You should have your feature branch with the helloWorld.txt file and it’s contents:\
’Hello from feature branch!\
and\
Hello from merge-conflict branch!\
after successful merge conflict’
19. Go to repo page and check your commit history to see how it looks visually and that all steps were done successfully.
20. Create a pull Request to merge your feature branch to master