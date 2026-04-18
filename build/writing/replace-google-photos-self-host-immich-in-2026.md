---
title: Replace Google Photos: Self‑Host Immich in 2026
description: If you're anything like me, you must also have 10s of Gigabytes of photos or videos, and with the smartphones cameras getting better and better, we have started capturing more memories then we used to
date: 2026-03-25T19:11:34.772Z
author: Nishchay Kaushik
tags: Homelab, self-hosted, SelfHosting, #selfhosted, Google, Google Photos, privacy, self hosting, Open Source, open source, Docker, tailscale, Immich, cloudflare
---

# Replace Google Photos: Self‑Host Immich in 2026

If you're anything like me, you must also have 10s of Gigabytes of photos or videos, and with the smartphones cameras getting better and better, we have started capturing more memories then we used to before.

But saving and viewing these memories has started to become costly, and with every tech giant racing to feed our data into AI models., these private memories of ours are also being used to train these new AI models.

I wanted to figure out how could I make these memories of mine more accessible, and actually be able to see them again with ease.

Earlier I used to manually copy and backup my photos to an external backup storage but recently I had my phone die on me which meant I lost all my recent photographs, so It was really important if I could make this backup automatic.

The 2TB plan on Google Photos is going to set you back 100$/yr, while the same on iCloud will cost you 132$/yr. But lets be real, how often do we really access these photos, so while having the ability to access them is important, you could optimize how you pay for it all.

## The Best Google Photos Alternatives in 2026

There are a couple of Open Source options that I came across like, Ente Photos, **Immich** etc.

I went ahead with Immich, because I liked the interface, as well as while searching for the options I found a lot of positive sentiments about Immich in the reddit community.

## Self-Host Immich

![Immich logo](https://cdn.hashnode.com/uploads/covers/6984dc9e559eb2d777b15a66/c7701e9f-19a1-4383-96c8-2288ffa6c394.png align="center")

> [https://immich.app/](https://immich.app/)
> 
> *Self-hosted photo and video management solution*

## Features of Immich

Immich has pretty much all the feature you can think of

*   Face Detection
    
*   Searching based on text/tags
    
*   Location Mapping (one of my favorites ❤️‍🔥)
    
*   and a lot more…
    

![Immich Map with photo markers](https://cdn.hashnode.com/uploads/covers/6984dc9e559eb2d777b15a66/9824763a-ca3a-41d1-995f-d0f50017dee6.png align="center")

Setting up Immich is quite straightforward, we can set it up using multiple strategies, in this guide I’ll be using docker, as that allows us to fresh-start in case we mess anything up.

## Getting things ready

### Docker & Compose

Follow the steps on [https://docs.docker.com/get-started/get-docker/](https://docs.docker.com/get-started/get-docker/) to **install docker and docker compose**.

Because we are using docker, the setup is identical across all operating systems..

### Setting things up

The Immich documentation is an excellent starting point, offering a straightforward, step-by-step guide.

Follow the steps here: [https://docs.immich.app/install/docker-compose](https://docs.immich.app/install/docker-compose)

> :warning:
> 
> While you can have Immich store the photos library on either SSD or HDD, make sure you setup Immich and most importantly the database Immich uses on a SSD, this ensures everything stays snappy.
> 
> BUT If you do install Immich database on a HDD make sure to set the environment variable `DB_STORAGE_TYPE` with the appropriate value [https://docs.immich.app/install/environment-variables#database](https://docs.immich.app/install/environment-variables#database)

Once you have completed all the steps you will have your personal Google Photos alternative i.e., Immich running on `http://<machine-ip-address>:2283` / `http://localhost:2283`

## Adding your existing albums

### Mounting the directories

While **Immich** is meant for doing backup from your devices, It doesn’t mean you need to upload your photos manually for loading them into Immich. If you already have your photos and memories in a folder you can point them into Immich and it would load them for you.

Here’s an example of the docker-compose.yml file that I use:

```docker
services:
  immich_server:
    container_name: immich_server
    image: ghcr.io/immich-app/immich-server:${IMMICH_VERSION:-release}
    ......
    volumes:
      .......
      # Modify below to change external albums path
      - /media/PhotosStorage:/mnt/media/og-photo-albums:ro # Change this to your media storage location
      ######
    .....
    restart: always
```

In the above compose file I use `:ro` to make my external albums location mount in `read-only` mode, You can change it to `:rw` to have it in `read-write` mode which will allow Immich to also delete and edit files.

Once you have added these folders into your docker-compose file, you need to restart your Immich instance,

You can do so by running the below command in the folder you have your Immich’s docker-compose file.

```bash
docker compose up -d
```

After restart you can monitor the logs by running the command `docker compose logs` in the same folder, to see if the Immich service has restarted successfully or not after adding your external photo albums.

### Updating Immich to read external Albums

Now to make sure Immich loads these photos and show it in the UI. You need to configure it in the Admin setting.

Head over to your Immich instance, then from the `Settings > Administration > External Libraries`

![Immich administration settings for external libraries](https://cdn.hashnode.com/uploads/covers/6984dc9e559eb2d777b15a66/3417c74e-7c18-47aa-8472-1bbd35432268.png align="center")

Click on `Create Library`

![External library top nav bar](https://cdn.hashnode.com/uploads/covers/6984dc9e559eb2d777b15a66/5ac69b53-217a-4d39-b5ee-6078837d4e50.png align="center")

On newly created External Library Click on `+ Add` button to add your external albums

The path you add here is from your docker compose file which you previously added.

Example:

```bash
- /media/PhotosStorage:/mnt/media/og-photo-albums
```

Insert the path value you see on the right side of the `:`  i.e, in this case it would be `/mnt/media/og-photo-albums`

![Immich administration external library folders config](https://cdn.hashnode.com/uploads/covers/6984dc9e559eb2d777b15a66/a9ad6281-8555-42ce-9b3e-503b363a364c.png align="center")

## Triggering Jobs

Once you have added your external album, you can hit `Scan` to have Immich read all your photos and videos.

You can also manually trigger the jobs to generate thumbnails, doing duplicate detection, face detection etc by going to the `Job Queues` page

When you run it for the first time these jobs might take time depending upon the size and number of file in your folder, **so be patient** and let it run through.

![Immich Administration Job Queues page](https://cdn.hashnode.com/uploads/covers/6984dc9e559eb2d777b15a66/8e6c667b-4ed8-4600-8aea-c857f1b04733.png align="center")

You can check the status of what jobs are running and how much work is pending on the same page.

Once everything has finished, your external album is ready to use **🎉**

## Making it Public and Secure

To truly have Immich as a backup option, it is important that we can access it outside our home and make it public so that we can also do backups.

There are 2 ways to go about it:

1.  Cloudflare Tunnel
    
2.  Tailscale
    

Both of these methods have their own benefits and downsides, let me quickly cover those;

**Cloudflare**

*   You must own a domain
    
*   100MB Limits on file uploads under free plan (problem for videos)
    
*   Anyone can access without creating Cloudflare account
    

**Tailscale**

*   No domain required
    
*   VPN required to be connected always
    
*   Need to invite users to Tailscale to access Immich
    
*   No file upload limits
    

Depending upon which one you prefer you can follow either of these setup:

### Cloudflare setup

1.  Create a Cloudflare tunnel [https://developers.cloudflare.com/cloudflare-one/networks/connectors/cloudflare-tunnel/get-started/](https://developers.cloudflare.com/cloudflare-one/networks/connectors/cloudflare-tunnel/get-started/)
    
2.  In the “Publish an application” step you would publish Immich which is running on `localhost:2283`
    
3.  Once your tunnel is up, you can now access your Immich over the subdomain you created. eg., `immich.domain.com`
    
4.  Open the above URL to verify if your Immich is running and is accessible and you land on the login page.
    

If you are able to access Immich, you can now use this URL in the Immich app.

Next, We can now also make this a bit more secure, such that not everyone can access even the login page of Immich, this would prevent unauthorized access to your Immich instance.

To do that, we will setup “Access Control”

Head over to [https://developers.cloudflare.com/cloudflare-one/access-controls/applications/http-apps/self-hosted-public-app/](https://developers.cloudflare.com/cloudflare-one/access-controls/applications/http-apps/self-hosted-public-app/) and setup a new application, while setting up the policies you can even control who can access this application of yours and filter based on the emails. When you setup the application now when you access the URL it would land on this type of login page.

![Cloudflare Access login page](https://cdn.hashnode.com/uploads/covers/6984dc9e559eb2d777b15a66/a6b2bddc-36f4-4ad6-b40f-dfc884185382.png align="center")

Anyone can enter their email and request the code to get access, you can limit the emails that can do so, essentially blocking anyone else from even getting access.

Now, once we enable access control, it would prevent the Immich app from opening the URL.

To solve for it, we would add another “Policy” to the app called “Service Auth” which would be used in Immich app.

Follow the step on [https://developers.cloudflare.com/cloudflare-one/access-controls/service-credentials/service-tokens/](https://developers.cloudflare.com/cloudflare-one/access-controls/service-credentials/service-tokens/) and create a new Service Token.

You should now have two values, keep them safe and save it securely.

```bash
CF-Access-Client-Id: <CLIENT_ID>

CF-Access-Client-Secret: <CLIENT_SECRET>
```

Now, go back to your “Application” you created in the previous step and “Policies” tab.

Click “Select existing policies” and pick the newly created “Service Auth”.

Now, your Immich app will have two ways in which users can “access” it 1. Using the 1-time code by providing email, 2. By using the secret headers “CF-Access-Client-Id” and “CF-Access-Client-Secret” (which would be primarily for Immich app)

Now, To configure the Immich app

*   Go to settings
    
*   Advanced
    
*   Custom proxy headers
    
*   Add the values you saved previously
    

Now it should look like something below.

![Immich app settings custom proxy headers](https://cdn.hashnode.com/uploads/covers/6984dc9e559eb2d777b15a66/ad7a7ec5-5a00-449e-ae4f-7bd0e3a15cd0.png align="center")

You can now add the URL in your “Networking” section of the Immich app settings.

You should see a green check-mark :white\_check\_mark: next to it if the app is able to access it.

Congrats your Immich app is now ready. 🎉

### Tailscale setup

Go to [https://login.tailscale.com/welcome](https://login.tailscale.com/welcome) and create a new account

Then “Add device” and install tailscale on your system.

![Taiscale new device menu](https://cdn.hashnode.com/uploads/covers/6984dc9e559eb2d777b15a66/fdd17370-77e8-4b6b-a528-c9787d2e2929.png align="center")

Now your system should show up in the “Machines” tab.

Now go to “Services” tab and “Define a service”

Enter the name of the service and use port as ‘443’

It should look something like this:

![](https://cdn.hashnode.com/uploads/covers/6984dc9e559eb2d777b15a66/d31b8197-9896-4fa7-a205-ed5e3034bc8d.png align="center")

After defining the service Tailscale should give you a command to run.

It might look like

```bash
tailscale serve --service=svc:immich --https=443 127.0.0.1:2283
```

run it in terminal on your system, and then accept the service on the Services tab in tailscale.

Once you finish this you should see “**🟢**Online” next to the service name.

Now connect to tailscale VPN using the client and try opening the URL you see next to the service.

You should now be able to access the Immich app over tailscale, remember this URL will only work if you are connected over Tailscale VPN.

You can also add this URL in the Immich app under the “Networking” section in Immich setting.

Once you see the green check-mark **✅** next to your tailscale URL in Immich app, you are done!

Your Immich app is now remotely accessible.🎉

## Ending thoughts

Running your own Google Photos alternative like Immich lets you take back control of your memories — cutting recurring cloud costs, improving privacy, and automating backups so you don’t lose recent photos again.

It does require some upfront effort (hosting, storage planning, and occasional maintenance), but the tradeoffs are worth it if you value long-term accessibility and ownership of your data.

Start small: test with a subset of your library, automate uploads from your phone, and keep an offsite or secondary backup for redundancy.

With the active open-source community and clear docs, self-hosting is a practical, cost-effective option for anyone ready to invest a little time for greater control.

## Whats Next?

I am writing about all the various service I have been self-hosting.

Read my other posts on Self-Hosting on:

[https://nkaushik.in/writing/series/homelab/](https://nkaushik.in/writing/series/homelab/)

[https://nkaushik.in/writing/getting-started-with-self-hosting-in-2026](https://nkaushik.in/writing/getting-started-with-self-hosting-in-2026)

[https://nkaushik.in/writing/adguard-home-for-families-how-to-stop-ads-and-trackers-without-installing-extensions/](https://nkaushik.in/writing/adguard-home-for-families-how-to-stop-ads-and-trackers-without-installing-extensions/)
