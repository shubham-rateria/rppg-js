var l = [
  1.9561112392979434e-14,
  4.388632354999078e-14,
  5.914524991666895e-14,
  5.940267989791297e-14,
  -2.029951764983479e-14,
  -5.713790988229602e-14,
  -8.107327593229727e-14,
  -8.948559898013113e-14,
  -4.783588119718324e-14,
  -2.1490376535203723e-14,
  2.0387058091889808e-14,
  6.587030372632345e-14,
  1.325578185679061e-13,
  1.7836613944903426e-13,
  2.0465748047512548e-13,
  2.559003568536275e-13,
  3.2246015372224097e-13,
  4.528148480118665e-13,
  5.689260741858119e-13,
  8.384340750497606e-13,
  9.64856376345867e-13,
  1.0110397597443639e-12,
  1.0900133897030512e-12,
  1.0812564201845387e-12,
  1.1944061112992083e-12,
  1.3236514590467228e-12,
  1.4854087653604537e-12,
  1.5293838799166698e-12,
  1.602411270578401e-12,
  1.6200109421570218e-12,
  1.699816058792476e-12,
  1.7941984037849721e-12,
  1.8431729980457517e-12,
  1.9341280442330984e-12,
  2.0727074667026685e-12,
  2.2633872577747733e-12,
  2.3937704444953385e-12,
  2.662234211765814e-12,
  2.828730960440771e-12,
  2.9636694330486464e-12,
  2.9795888223376283e-12,
  3.1009796436098704e-12,
  3.26149161557866e-12,
  3.3631908589003923e-12,
  3.5227105672196094e-12,
  3.65511253672471e-12,
  3.731213441966683e-12,
  3.859196574877714e-12,
  0.48855692011148083,
  -0.18910301191779139,
  -0.19690957508846504,
  0.39209992675783817,
  0.1897631591169932,
  -0.20702090562068745,
  -0.20836024961393204,
  -0.055703419493459985,
  -0.1734941340941912,
  -0.12508989346973096,
  0.1523668872603958,
  0.01565972993087575,
  -0.10465277761093639,
  0.14962212121918325,
  -0.11105794043937255,
  0.054813737376712315,
  -0.031857248498364486,
  0.1652160033404464,
  -0.034773249146728004,
  -0.012927626635519156,
  -0.04866583467369873,
  0.14778842767576764,
  0.0030139621281007225,
  0.061630276124872756,
  -0.08151312216794634,
  -0.028955565544376827,
  -0.13209123989262644,
  -0.06375264414098639,
  0.053623697359167916,
  -0.0761595419280993,
  -0.04280473900371369,
  0.047217942847887884,
  0.07708450480835316,
  -0.011924053622824686,
  0.0029775190563610327,
  0.03653312271418259,
  -0.02768876505760647,
  -0.008299324281655368,
  0.009415548704405053,
  -0.026491734158613323,
  0.04220982727935932,
  -0.05271504571963939,
  0.027310660111115024,
  -0.0022413502578974565,
  -0.002130682997427138,
  -0.004748641671987442,
  -0.03391744617233957,
  -0.015160567673809678,
  -0.0027217841755367567,
  0.0017044194750060813,
  -0.005676278490538066,
  0
];

var fft = require("fft-js").fft,
  fftUtil = require("fft-js").util,
  signal = [1, 0, 1, 0];

var phasors = fft([
  0.009415548704405053,
  -0.026491734158613323,
  0.04220982727935932,
  -0.05271504571963939,
  0.027310660111115024,
  -0.0022413502578974565
]);

var frequencies = fftUtil.fftFreq(phasors, 8000), // Sample rate and coef is just used for length, and frequency step
  magnitudes = fftUtil.fftMag(phasors);

var both = frequencies.map(function(f, ix) {
  return { frequency: f, magnitude: magnitudes[ix] };
});

console.log(both);