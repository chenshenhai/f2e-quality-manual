#!/bin/bash

# install cnpm
if command -v cnpm >/dev/null 2>&1; then 
  echo 'exists cnpm' 
else 
  echo 'no exists cnpm'
  npm install cnpm -g --registry=https://r.npm.taobao.org
fi

# walk all demo
function test_all_demo() {
  for file in `ls $1`  
  do
    if [ -d $1"/"$file ]  
    then
      echo $1"/"$file
      cd $1"/"$file
      # cnpm i
      # npm test
      cd ..
    fi
  done
}
test_all_demo "./demo"


