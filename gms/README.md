# Grants Management System (GMS)

**Note 1:** This project works best on macOS due to there being discrepancies between Unix and Windows filesystems that can cause this project to error if Docker settings are improperly set during installation.

**Note 2:** If there is any issues with running this project, feel free to contact Francisco at remixielive@live.com at any time.

## Setup:
1. Download Docker from [https://www.docker.com/get-started](https://www.docker.com/get-started) and MySQL Workbench from [https://dev.mysql.com/downloads/workbench/](https://dev.mysql.com/downloads/workbench/)

2. Install it onto your computer

3. Download the project files as a zip from Github using the green **Code** shown above.

4. Extract the project files to a folder. 

5. Open CMD/Terminal and `cd` to the project folder.

6. Run `docker-compose up` and wait until the text `Ready on http://0.0.0.0:8000` appears.

7. Open MySQL WorkBench. (If a `Connect to Database` window does not show up right away, go to `Database` -> `Connect to Database...` on MySQl Workbench's menu bar.) 

8. Set the following values:
- hostname: `127.0.0.1`
- port: `3306`
- username: `root`
- connection method: `Standard (TCP/IP)`

9. Enter the password `MYSQL_ROOT_PASSWORD`

10. Go to `Server` -> `Users and Priviledges` on the menu bar

11. Click `Add Account`

12. Set the following values: 
- login name: `personman`
- authentication type: `Standard`
- limit to Hosts Matching: `%`
- password: `MYSQL_PASSWORD`
- confirm password: `MYSQL_PASSWORD`

13. Click `Apply`

14. Go to `Administrative Roles`

15. Check the box next to `DB Manager` 

16. Click `Apply` (You might see checkmarks appear for other boxes. This is expected.)

17. Open Chrome/Firefox/Microsoft Edge and navigate to `localhost:8081`

18. login with these credentials:
- username: `root`
- password: `MYSQL_ROOT_PASSWORD`

19. Click `Go`

20. Go to `Import` on the top navigation bar.

21. Click `Browse...`

22. Go to the root directory of this project, select `MYSQL_DATABASE.sql` and click `Open`

23. Click `Go`. You should see a bunch of green rectangles.

24. Navigate to the URL `localhost:8000`

25. Click `Import` above and navigate to `usr/src/gms`

26. Click `Import this folder` below. If a popup appears about node_modules missing, click `Import Anyway`

27. Go to `Tasks` -> `start-server` -> `Run task`

28. Go to `serve` -> `Run task`. Wait until the `App running at` line appears.

29. Navigate to the URL `localhost:8080`

30. Begin using the app.
