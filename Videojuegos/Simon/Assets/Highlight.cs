using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class Highlight : MonoBehaviour
{
    
    public AudioSource ding;
    public Image image;
    public Color originalColor;

    public float length;

    void Start()
    {
        image.color = originalColor;
    }

    public void highlight(float l)
    {   
        length = l;
        Debug.Log("PLAYING SOUND");
        ding.Play();
        StartCoroutine("HC");
        
    }

    IEnumerator HC()
    {
        image.color = Color.white;
        yield return new WaitForSeconds(length);
        image.color = originalColor;
        //Debug.Log("IM ACTIVATED");
    }
}
