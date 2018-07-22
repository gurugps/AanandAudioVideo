package com.example.sguru.myapplication;

import android.app.Activity;
import android.content.Context;
import android.hardware.Sensor;
import android.hardware.SensorManager;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.util.Log;

import org.json.JSONObject;

import java.util.List;
import java.util.Map;

public class MainActivity extends Activity {

    SensorManager sensorManager;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);



        SensorManager sensorManager
                = (SensorManager)getSystemService(Context.SENSOR_SERVICE);
        List<Sensor> listSensor
                = sensorManager.getSensorList(Sensor.TYPE_ALL);


        Log.e("Sensors::::", listSensor+"");


    }
}
