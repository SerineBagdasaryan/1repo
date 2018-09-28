
CREATE DATABASE `us`

1. Քանի երկիր կա բազայում? 
SELECT COUNT(*) AS `erkir` 
FROM `Country`;

 
2. Քանի երկիր կա “A” տառով սկսվող Հարավային Ամերիկայում? 
SELECT * FROM `Country` 
WHERE `Continent`='South America' AND `name` 
LIKE 'A%%'

3. Բերել այն երկրների ցանկը որտեղ բնակչության թիվը մեծ է 3մլն ու իրենք ձևավորվել են 20րդ դարի II կեսին ու կյանքի միջին տևողությունները 50-60 տարի է:
SELECT * FROM `Country` 
WHERE `Population` >=3000000 AND 
`LifeExpectancy`>=50 AND `LifeExpectancy`<=60
AND `IndepYear`>=1950

 4. Բերել այն Արևելյան Եվրոպայի այն երկրների ցանկը որտեղ կյանքի միջին տևողությունը 70 -72 տարի է կամ մայրաքաղաքը սկսվում է ‘b’ տառով դասակարգված z-a; 


SELECT cu.`Name`, cu.`Region`, cu.`LifeExpectancy`, c.`Name` FROM `Country` cu
INNER JOIN `City` c ON c.id=cu.`Capital`
WHERE cu.`Region`='Southern Europe' AND (cu.`LifeExpectancy` BETWEEN 70 AND 72) OR c.`Name` LIKE 'B%'

 5. Բերել Աֆրիկայի այն երկրների մայրաքաղաքները և կյանքի միջին տևողությունները
 որտեղ պետական կարգը հանրապետություն է կամ պետության ղեկավարի անունը ավարտվում է ‘t’ տառով; 
 դասակարգված ըստ կյանքի տևողության նվազման կարգի : 

SELECT cu.`Name`,cu.`Continent`, cu.`LifeExpectancy`,cu.`GovernmentForm`,cu.`HeadOfState`, c.`Name` FROM `Country` cu
INNER JOIN `City` c ON c.id=cu.`Capital`
WHERE cu.`Continent`='Africa' AND cu.`GovernmentForm`='Republic' AND c.`Name` LIKE '%t' 
ORDER BY cu.`LifeExpectancy` DESC

 

 


SELECT COUNT(NAME)
FROM Country;


SELECT*FROM `City`
WHERE `Population`>3000000;

SELECT CountryCode, NAME, Population
FROM City;
WHERE Population >= 3000000

SELECT AVG(LifeExpectancy)
FROM Country;


SELECT * FROM City
WHERE `name` LIKE 'A%';

SELECT * FROM `City`
WHERE 70 <`Population` < 72 OR `name` LIKE 'z_a%';

SELECT * FROM `City`
WHERE `CountryCode` RES ;

bonBonus: Հաշվեք Ասիայի այն երկրների քանակը որտեղ կառավարման համակարգը հանրապետություն է , բնակչության թիվը 60ից 260մլն է ու եթե այդ երկրների քանակը կենտ վերադարցրեք “hello world”եթե զույգ ապա վերադարցրեք “ok!”:us


SELECT IF (COUNT(NAME)%2=0 , "ok" , "hello world") FROM country 
WHERE Population BETWEEN 60000000 AND 260000000
AND GovernmentForm="Republic"

 

Պատասխանեք հետևյալ հարցերին
1. Քանի երկիր կա բազայում? 
2. Քանի երկիր կա “A” տառով սկսվող Հարավային Ամերիկայում? 
3. Բերել այն երկրների ցանկը որտեղ բնակչության թիվը մեծ է 3մլն ու իրենք ձևավորվել են 20րդ դարի II կեսին ու կյանքի միջին տևողությունները 50-60 տարի է:
4. Բերել այն Արևելյան Եվրոպայի այն երկրների ցանկը որտեղ կյանքի միջին տևողությունը 70 -72 տարի է կամ մայրաքաղաքը սկսվում է ‘b’ տառով դասակարգված z-a; 
5. Բերել Աֆրիկայի այն երկրների մայրաքաղաքները և կյանքի միջին տևողությունները որտեղ պետական կարգը հանրապետություն է կամ պետության ղեկավարի անունը ավարտվում է ‘t’ տառով; դասակարգված ըստ կյանքի տևողության նվազման կարգի : 
Bonus: Հաշվեք Ասիայի այն երկրների քանակը որտեղ կառավարման համակարգը հանրապետություն է , բնակչության թիվը 60ից 260մլն է ու եթե այդ երկրների քանակը կենտ վերադարցրեք “hello world”եթե զույգ ապա վերադարցրեք “ok!”:




