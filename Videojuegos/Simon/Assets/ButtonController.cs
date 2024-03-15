using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class ButtonController : MonoBehaviour
{

    public SimonController simonController;
    public int index;

    public void Click()
    {
        simonController.ButtonPressed(index);
    }
}
