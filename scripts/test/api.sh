cd ./test/api
check_file=`ls | grep ".spec.ts" |  tr -s "\n"  " "`
# echo $check_file
jest --colors --coverage --findRelatedTests $check_file