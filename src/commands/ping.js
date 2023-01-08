import { SlashCommandBuilder } from "discord.js";

export default {
  data: new SlashCommandBuilder()
    .setName("ping")
    .setDescription("Replies with Pong!"),
  async execute(interaction) {
    const sent = await interaction.reply({
      content: "Pinging...",
      fetchReply: true,
    });

    const pingEmbed = {
      title: ":ping_pong: Pong!",
      color: 3553598,
      fields: [
        {
          name: ":stopwatch: Uptime",
          value: `\`${Math.round(interaction.client.uptime / 60000)} minutes\``,
          inline: true,
        },
        {
          name: ":sparkling_heart: WS heartbeat",
          value: `\`${interaction.client.ws.ping}ms\``,
          inline: true,
        },
        {
          name: ":round_pushpin: Roundtrip Latency",
          value: `\`${
            sent.createdTimestamp - interaction.createdTimestamp
          }ms\``,
          inline: true,
        },
      ],
      footer: {
        text: "Pingu",
        icon_url:
          "https://cdn.e-z.host/e-zimagehosting/07839b7c-ff5c-4dc5-952a-f78bef48d49a/car5lqcn.png",
      },
      timestamp: "2023-01-08T21:21:00.000Z",
    };

    // const embed = new EmbedBuilder()
    //   .setImage(
    //     "https://cdn.e-z.host/e-zimagehosting/07839b7c-ff5c-4dc5-952a-f78bef48d49a/car5lqcn.png"
    //   )
    //   .setColor(0x36393e)
    //   .setAuthor({
    //     name: "Pingu",
    //     iconUrl:
    //       "https://cdn.e-z.host/e-zimagehosting/07839b7c-ff5c-4dc5-952a-f78bef48d49a/car5lqcn.png",
    //   })
    //   .setTitle(":ping_pong: Pong!")
    //   .addFields(
    //     {
    //       name: ":stopwatch: Uptime",
    //       value: `\`${Math.round(interaction.client.uptime / 60000)} minutes\``,
    //     },
    //     {
    //       name: ":sparkling_heart: Websocket heartbeat",
    //       value: `\`${interaction.client.ws.ping}ms\``,
    //     },
    //     {
    //       name: ":round_pushpin: Rountrip Latency",
    //       value: `\`${
    //         sent.createdTimestamp - interaction.createdTimestamp
    //       }ms\``,
    //     }
    //   )
    //   .setFooter({
    //     text: "Pingu",
    //     iconUrl:
    //       "https://cdn.e-z.host/e-zimagehosting/07839b7c-ff5c-4dc5-952a-f78bef48d49a/car5lqcn.png",
    //   })
    //   .setTimestamp();

    await interaction.editReply("Pong! Data below.");
    await interaction.followUp({ embeds: [pingEmbed] });
  },
};
