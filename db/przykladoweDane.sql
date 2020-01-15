INSERT INTO `gastrotogo`.`product`
(
`nazwa`,
`cena`,
`typ`,
`waga`)
VALUES
(
'hotdog',
5,
'jedzonko',
1);

INSERT INTO `gastrotogo`.`product`
(
`nazwa`,
`cena`,
`typ`,
`waga`)
VALUES
(
'pizza',
20,
'jedzonko',
2);

INSERT INTO `gastrotogo`.`product`
(
`nazwa`,
`cena`,
`typ`,
`waga`)
VALUES
(
'kokakola',
1,
'napoj',
1);

INSERT INTO `gastrotogo`.`client`
(
`firstName`,
`lastName`,
`email`,
`passwordHash`,
`dateOfBirth`,
`contactNumber`,
`business`,
`address`,
`zipCode`,
`country`)
VALUES
(
'Jan',
'Janowski',
'jj@wp.pl',
'$2a$10$QHCx8OFsTq5fUSvHVbO50ON4jzAqcy05JSdHiApAiZcY5LUDbvMiO',
'1990-11-12',
123456789,
'fishing',
'koszykowa',
'00-001',
'Austria');

INSERT INTO `gastrotogo`.`client`
(
`firstName`,
`lastName`,
`email`,
`passwordHash`,
`dateOfBirth`,
`contactNumber`,
`business`,
`address`,
`zipCode`,
`country`)
VALUES
(
'Jakub',
'Kowalski',
'a@dsa.pl',
'$2a$10$tklRQXUbVw1k8wabJ5RVIuj.aIm/exMZEgj.R0Yrrq6zN1WPwjH4G',
'1999-01-03',
123456789,
'travel',
'koszykowa',
'00-002',
'Poland');