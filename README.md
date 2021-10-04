# cool looking dashboard

It'll monitor servers, keep track of todos and notes, and have a web-based ssh terminal and be dockerised to its easily self-hostable.

## Deployment

1. Install the latest build of NodeJS 16.
2. Install dependencies for building the PWA.

```bash
cd pwa
npm i -g pnpm
pnpm i
```

3. Build the PWA.

```bash
pnpm run build
```

4. Install the latest release of Python 3 and add it to your path. These examples use the `py` command, but you may need to use `python` or `python3` instead.
5. Install the dependencies for running the server.

```bash
cd server
pip install -r requirements.txt
```

6. Set up the database by running the `setup_database.py` script.

```bash
py setup_database.py
```

7. Run the script to start the server (don't run `server.py` directly).

```bash
# Windows
./run_server.bat

# Linux
chmod +x run_server.sh
./run_server.sh
```

8. Done. The server will be running on port 80!

## Licence

See LICENCE file.
