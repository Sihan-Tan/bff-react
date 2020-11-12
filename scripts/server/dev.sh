echo 'loader server-dev.sh';
echo `pwd`;
ts-node-dev --respawn --transpile-only -- src/server/app.ts;
# ts-node src/server/app.ts;