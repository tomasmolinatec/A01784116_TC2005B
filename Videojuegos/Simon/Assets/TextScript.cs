using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.TextCore.Text;
using UnityEngine.UI;
public class TextScript : MonoBehaviour
{
   
    public Text text;

   
    public void SetText(string message)
    {
        text.text = message;
    }
}
