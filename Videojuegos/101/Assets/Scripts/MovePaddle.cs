/*
Script to move the paddle in the game
*/

using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class MovePaddle : MonoBehaviour
{

    public float speed ;
    public KeyCode moveUp;
    public KeyCode moveDown;

    // Start is called before the first frame update
    void Start()
    {
        
    }

    // Update is called once per frame
    void Update()
    {
        if (Input.GetKey(moveUp))
        {
            transform.Translate(Vector3.up * speed);
        }
    }
}
