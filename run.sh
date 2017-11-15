# start selenium
# ./node_modules/protractor/bin/webdriver-manager start > /dev/null 2>&1 &
./node_modules/.bin/webdriver-manager start &
# wait until selenium is up
while ! curl http://localhost:4444/wd/hub/status &>/dev/null; do 
    echo "waiting for selenium driver"; 
    sleep 5; 
done

# run the build
npm run test

# stop selenium
curl -s -L http://localhost:4444/selenium-server/driver?cmd=shutDownSeleniumServer > /dev/null 2>&1