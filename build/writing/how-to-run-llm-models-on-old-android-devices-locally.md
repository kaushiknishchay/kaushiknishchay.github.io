---
title: How to Run LLM Models on Old Android Devices Locally
description: This post covers a much more technical and involving way to run local LLMs on android via a terminal setup.
If you want to try an easy-to-use  , less technical way, I have it covered in this latest bl
date: 2026-02-13T20:16:51.412Z
author: Nishchay Kaushik
tags: gemma-4, gemma, gemma4, #selfhosted, llm, local ai, Local LLM, privacy, termux, llamacpp, llama-server, Android, iOS, AI, AI, AnythingLLM, pocketpal, google edge,  Edge AI
---

# How to Run LLM Models on Old Android Devices Locally

> This post covers a much more technical and involving way to run local LLMs on android via a terminal setup.
> 
> If you want to try an <mark class="bg-yellow-200 dark:bg-yellow-500/30">easy-to-use </mark> , less technical way, I have it covered in this latest blog post [https://nkaushik.in/writing/top-4-ways-to-run-llm-locally-on-android-and-ios/](https://nkaushik.in/writing/top-4-ways-to-run-llm-locally-on-android-and-ios/)
> 
> In the above post I go through 4 ways to run on LLMs on both Android and iOS devices.

* * *

When LLM models were first launched, we had to rely on the cloud versions, like ChatGPT or Gemini. However, things are changing for the better. We are now seeing a wave of new AI models being released every week, and most of them can run locally with good performance. This allows us to perform AI inference on edge or even mobile devices.

I have been running these models on my Windows machine using Ollama for a while, and even on my latest high-end Android phone with apps like [Google AI Edge Gallery](https://play.google.com/store/apps/details?id=com.google.ai.edge.gallery&hl=en_IN), [PocketPal](https://play.google.com/store/apps/details?id=com.pocketpalai&hl=en_IN), and [AnythingLLM](https://play.google.com/store/apps/details?id=com.anythingllm&hl=en_IN). Everything has been running smoothly. I've used these models for tasks like describing images or helping me improve my writing. The speed of inference is quite fast, thanks to the latest and fastest mobile SoCs they are running on.

BUT…

I wanted to try something different. I had an old Android phone (OnePlus 3T) lying around, and I always wondered if I could find a use for it. So, this weekend, I did a quick proof of concept.

I tested whether I could run these new AI models locally on this old Android device, which doesn't have the most powerful hardware. Fortunately, tools like [Unsloth](https://unsloth.ai/), GGUF, and [Llama.cpp](https://github.com/ggml-org/llama.cpp) are available.

In cases where we have limited RAM, the GGUF format of models lets us run them with much lower VRAM requirements while maintaining nearly the same accuracy.

To get started, I first needed to figure out how to run these models. Llama.cpp offers a CLI or server method to interact with your model. However, they provide pre-built binaries for Windows and Linux, not for Android, so we need to compile them for Android.

### 🛠️Installing Termux

To compile llama.cpp for Android, I needed a shell, and Termux was the solution. The latest version on the Play Store wasn't compatible with my device, but I managed to download and install the APK from F-Droid. With Termux running, I was ready to proceed to the next step of compiling llama.cpp..

### 👷🏼Building llama.cpp

This was quite straightforward, all I had to do was follow the steps:

[https://github.com/ggml-org/llama.cpp/blob/master/docs/android.md#build-cli-on-android-using-termux](https://github.com/ggml-org/llama.cpp/blob/master/docs/android.md#build-cli-on-android-using-termux)

<div data-node-type="callout">
<div data-node-type="callout-emoji">🤔</div>
<div data-node-type="callout-text">While I was building llama.cpp, I ran into a permission issue, which happens if we clone the repository into an external storage, instead use the home directory of Termux and build it there itself.</div>
</div>

### 🏃🏻Running the model

Once llama.cpp was built, the binaries were placed in the `bin` folder under the `build` directory. Then, I could start the server using

```bash
./build/bin/llama-server -m model-path -c 2048 -n 4096 -—host 0.0.0.0 --port 8080
```

Since I was going to connect to this server from a different device, I had to set the host to 0.0.0.0.

I tried using 4 different models with `Q4_K_M` quantization:

*   [https://huggingface.co/unsloth/LFM2.5-1.2B-Instruct-GGUF](https://huggingface.co/unsloth/LFM2.5-1.2B-Instruct-GGUF)
    
*   [https://huggingface.co/LiquidAI/LFM2.5-1.2B-Thinking](https://huggingface.co/LiquidAI/LFM2.5-1.2B-Thinking)
    
*   [https://huggingface.co/unsloth/Qwen3-0.6B-GGUF](https://huggingface.co/unsloth/Qwen3-0.6B-GGUF)
    
*   [https://huggingface.co/unsloth/gemma-3-1b-it-GGUF](https://huggingface.co/unsloth/gemma-3-1b-it-GGUF)
    

I also had to adjust the `-c` and `-n` option values based on the available RAM.

Once the server was running, I needed a client to connect to it.

First, I configured the AnythingLLM app. Llama.cpp starts a server that is compatible with the Generic OpenAI spec. However, I often encountered issues with the app when trying to use the model, and it simply wouldn't work.

Then, I switched to [Open-WebUI](https://github.com/open-webui/open-webui) as a client, and it was an immediate success. As soon as I entered the details, it detected the model, and starting a chat with the model worked smoothly.

I tried running each model one by one to understand their performance. As expected, Qwen 3 0.6B was the fastest. The performance of these models was just okay. In some cases, I could get 10-18 tokens per second, while the Thinking models and larger models only produced 4-5 tokens per second. So, while they worked, the results weren't very impressive.

A key point to remember is that the [OnePlus 3T](https://www.gsmarena.com/oneplus_3t-8416.php) was launched 10 years ago, so I wasn't expecting groundbreaking performance. For comparison, when I run local models on the Snapdragon 8 Elite chipset, I get over 30 tokens per second on the LFM2.5 Thinking model with Q8 quantization, along with almost instant Time to First Token(TTFT). This performance is better and more consistent with other models I ran on the same chipset.

Another downside of running these models on a mobile device is the heat. Extended use will always cause your device to start heating up.

In conclusion, running LLM models on older Android devices is a feasible endeavor, albeit with some limitations. By leveraging tools like Termux and llama.cpp, it's possible to compile and execute AI models locally, even on hardware that is not cutting-edge. While performance may not match that of newer devices, and issues such as heat generation and slower token processing rates are present, this approach offers a valuable way to repurpose older technology. It demonstrates the potential for AI applications to be more accessible and versatile, allowing users to explore AI capabilities without relying solely on high-end devices or cloud-based solutions.

<div data-node-type="callout">
<div data-node-type="callout-emoji">💡</div>
<div data-node-type="callout-text">Part 2: <a target="_blank" rel="noopener noreferrer nofollow" class="text-primary underline underline-offset-2 hover:text-primary/80 cursor-pointer" href="https://nkaushik.in/writing/running-24-7-local-ai-on-an-old-android-without-overheating/" style="pointer-events: none;">https://nkaushik.in/writing/running-24-7-local-ai-on-an-old-android-without-overheating/</a></div>
</div>
