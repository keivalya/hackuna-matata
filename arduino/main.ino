#include <SoftwareSerial.h>

SoftwareSerial BTserial(10, 11); // Setup of Bluetooth module on pins 10 (TXD) and 11 (RXD);

const int FrontpingPin = 8; // Trigger Pin of Ultrasonic Sensor
const int FronttriggerPin = 9; // Echo Pin of Ultrasonic Sensor

const int BackpingPin = 8; // Trigger Pin of Ultrasonic Sensor
const int BacktriggerPin = 9; // Echo Pin of Ultrasonic Sensor


 long microsecondsToInches(long microseconds)
  {
     return microseconds / 74 / 2;
  }

  long microsecondsToCentimeters(long microseconds)
  {
     return microseconds / 29 / 2;
  }

void setup() {
  BTserial.begin(9600); // Bluetooth at baud 9600 for talking to the node server
  Serial.begin(4800); // Default Serial on Baud 4800 for printing out some messages in the Serial Monitor
  //Set up ports
  pinMode(FrontpingPin, OUTPUT);
  pinMode(FronttriggerPin, INPUT);

  pinMode(BackpingPin, OUTPUT);
  pinMode(BacktriggerPin, INPUT);
}

void loop() {
  long FrontCM,BackCM;
  //low the pins
  digitalWrite(FrontpingPin, OUTPUT);
  digitalWrite(FronttriggerPin, INPUT);

  digitalWrite(BackpingPin, OUTPUT);
  digitalWrite(BacktriggerPin, INPUT);

  //Take the values
  FrontCM = microsecondsToInches(pulseIn(FronttriggerPin, HIGH));
  BackCM = microsecondsToCentimeters(pulseIn(BacktriggerPin, HIGH));

  // Calls on BTSerial and sends the string to any connected devices.
  BTserial.print("{FrontDistance:" + FrontCM + ",BackDistance:" + BackCM + "}" );

  // readStringUntil()
  // Reads all bytes off of the the Serial buffer until it finds the escape character '/n'
  // And then removes these bytes from the buffer
  // Returns the value as a string, which we print to the Serial monitor

  Serial.println(BTserial.readStringUntil('\n'));

  //Just so the Serial Monitor on Arduino and console on the Node server don't get too spammed
  delay(500);

}