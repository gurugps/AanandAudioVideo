package com.aanandaaudiovideo.reactUtils;

import android.app.Activity;
import android.content.Context;
import android.hardware.Sensor;
import android.hardware.SensorManager;
import android.util.Log;
import android.widget.Toast;

import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.ReadableMap;
import com.facebook.react.bridge.WritableArray;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.module.annotations.ReactModule;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

@ReactModule(name = "AAManager")
public class AAManager extends ReactContextBaseJavaModule {

    public Context rnContext;

    public AAManager(ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @Override
    public String getName() {
        return "AAManager";
    }

    @ReactMethod
    public void displayToast(String rnMap){
        Activity activity = getCurrentActivity();
        Toast.makeText(activity, "This is my Toast message!",Toast.LENGTH_LONG).show();
    }
    @ReactMethod
    public void SensorList(Callback cb){
      Activity activity = getCurrentActivity();

        SensorManager sensorManager
                = (SensorManager) activity.getSystemService(Context.SENSOR_SERVICE);
        List<Sensor> listSensor
                = sensorManager.getSensorList(Sensor.TYPE_ALL);


        List<String> list = new ArrayList<>();
        for(int i=0; i<listSensor.size(); i++){
            list.add(listSensor.get(i).getName());
            Log.i("","sensor--"+listSensor.get(i).getName());
        }


        String [] listArray = list.toArray(new String[list.size()]);
        WritableArray wMap = Arguments.makeNativeArray(listArray);
        Log.i("Sensors::::", listArray.length+"");
        cb.invoke(wMap);



    }


}
