cd ./test/e2e
check_file=`ls | grep ".spec.tsx" |  tr -s "\n"  " "`
# echo $check_file
jest --colors --coverage --findRelatedTests --env=jsdom $check_file