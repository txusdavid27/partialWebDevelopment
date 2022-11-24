package com.example;

import static org.junit.Assert.assertTrue;

import org.junit.Before;
import org.junit.Test;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.Select;

import java.util.concurrent.TimeUnit;

public class AppTest 
{
    WebDriver browser;
    @Before
    public void init(){
        System.setProperty("webdriver.chrome.driver", "C:/Users/elpad/Desktop/S6/Desarrollo Web/v2/PARCIAL/partialWebDevelopment/traslav5/parcial/src/test/resources/chromedriver.exe");
        browser=new ChromeDriver();
        browser.manage().window().maximize();
        browser.get("http://127.0.0.1:5500/traslav2/index.html");
    }


    @Test
    public void testAgregar() throws InterruptedException
    {
            Select opciones= new Select(browser.findElement(By.id("izquierda")));
            opciones.selectByValue("carne");
            opciones.selectByValue("tomate");
            opciones.selectByValue("lechuga");
            WebElement botonAdd=browser.findElement(By.id("addbtn"));
            //Thread.sleep(2000);
            botonAdd.click();
            browser.manage().timeouts().implicitlyWait(2, TimeUnit.MINUTES);
    }
/*}
    @Test
    public void testRemover()
    {
        assertTrue( true );
    }
*/
}
