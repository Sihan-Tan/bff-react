echo 'loader server-dev.sh';
echo `pwd`;
cross-env NODE_ENV=development ts-node-dev --respawn --transpile-only -- src/server/app.ts;
# ts-node src/server/app.ts;