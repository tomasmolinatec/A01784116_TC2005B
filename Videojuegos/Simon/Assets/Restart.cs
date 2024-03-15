using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Restart : MonoBehaviour
{
    public SimonController simonController;

    public void Click()
    {
        simonController.Restart();
    }

}
