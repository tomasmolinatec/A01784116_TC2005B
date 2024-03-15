using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class SimonController : MonoBehaviour
{

    public List<Highlight> buttons = new List<Highlight>();
    private List<int> sequence = new List<int>();
    private List<int> userSequence = new List<int>();

    private int currentIndex = 0;

    public GameObject gameOverUI;
    public TextScript scoreScript;
     public TextScript highScoreScript;

    private bool playerTurn = false;
    private int score = 0;
    private int highscore = 0;


    void Start()
    {
        ShowSequence();
    }

    void ShowSequence()
    {
        StartCoroutine("SequenceC");
    }

    IEnumerator SequenceC()
    {
        playerTurn = false;
        int toAdd = Random.Range(0,buttons.Count);
        sequence.Add(toAdd);
        //Debug.Log("Random Value: " + toAdd );
        for (int i = 0; i < sequence.Count; i++)
        {
            yield return new WaitForSeconds(1);
            buttons[sequence[i]].highlight(0.5f);
        }
        yield return new WaitForSeconds(1f);
        //Flash();
        playerTurn = true;
    }

    public void ButtonPressed(int index)
    {
        if (!playerTurn)
        {
            return;
        }

        userSequence.Add(index);

        if (userSequence[currentIndex ] == sequence[currentIndex])
        {
            currentIndex++;
            if (userSequence.Count == sequence.Count)
            {
                currentIndex = 0;
                userSequence = new List<int>();
                score++;
                scoreScript.SetText(score.ToString());
                ShowSequence();
                
            }
        }
        else
        {
            GameOver();
            StopAllCoroutines();
        }
    }

    public void GameOver()
    {
        if (score > highscore)
        {
            highscore = score;
            highScoreScript.SetText("Highscore:\n"+highscore);
        }
        gameOverUI.SetActive(true);
    }

    public void Restart()
    {
        sequence = new List<int>();
        userSequence = new List<int>();
        currentIndex = 0;
        gameOverUI.SetActive(false);
        score = 0;
        scoreScript.SetText(score.ToString());
        ShowSequence();
        
    }

    public void Flash()
    {
        for (int i = 0; i < buttons.Count; i++)
        {
            buttons[i].highlight(0.2f);
        }


    }
}
