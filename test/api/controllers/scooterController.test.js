var assert = require('assert');
var scooterController =  require('../../../api/controllers/scooterController');

var expect = require('chai').expect;
var should = require('chai').should();

var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised).should();

let loadedScooter;

beforeEach('Setting up the scooter list', function(){
  console.log('beforeEach');

  scooterController.scooter().then(scooter => {
    console.log('load scooter');
    loadedScooter = scooter[scooterController.scooterName];
    //print scooter
    //console.log(loadedScooter);
    console.log('load scooter finished');
  })
  .catch(err => {
    loadedScooter = undefined;
    console.log('load scooter failed');
  });
});

describe('scooterController', function () {

  it('should return true count all local scooter equal 4', function(){
    return loadedScooter.length.should.equal(4);
  });

  it('should return true count all scooter in scooter controller equal 4', function(){
    return scooterController.scooterSize().should.equal(4);
  });

  it('should return true count all scooter async equal 4', function(){
    return scooterController.scooterSizeAsync().should.eventually.equal(4);
  });

});